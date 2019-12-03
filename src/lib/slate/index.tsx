/*
 * This file is part of ORY Editor.
 *
 * ORY Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ORY Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ORY Editor.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license LGPL-3.0
 * @copyright 2016-2018 Aeneas Rekkas
 * @author Aeneas Rekkas <aeneas+oss@aeneas.io>
 *
 */

import * as React from 'react';

import Component from './Component';
import Renderer from './Renderer';

import { SlatePluginCollection } from './types/SlatePlugin';
import * as hooks from './hooks';

import v002 from './migrations/v002';
import v003 from './migrations/v003';

import { ContentPluginConfig } from '@react-page/core/lib/service/plugin/classes';
import { SlateState } from './types/state';

import { pathOr } from 'ramda/src/pathOr';
import { ActionTypes } from 'redux-undo';
import { AnyAction } from 'redux';
import { defaultTranslations } from './default/settings';

import * as defaultPlugins from './plugins/index';
import * as pluginFactories from './pluginFactories/index';
import serialization from './serialization';
import { SlateProps } from './types/component';
import { lazyLoad } from '@react-page/core';

import { SlateRendererProps } from './types/renderer';
import { SlateControlsProps } from './types/controls';
import makeSlatePluginsFromDef from './utils/makeSlatePluginsFromDef';
import { InitialSlateStateDef } from './types/initialSlateState';
import transformInitialSlateState from './utils/transformInitialSlateState';
import { Value } from 'slate';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const slatePlugins = defaultPlugins;
export { defaultPlugins, slatePlugins, pluginFactories };

const Subject = lazyLoad(() => import('@material-ui/icons/Subject'));
const Controls = lazyLoad(() => import('./Controls/'));

const migrations = [v002, v003];
type SlateDefinition = {
  icon: JSX.Element;
  plugins: SlatePluginCollection;
  Renderer: React.ComponentType<SlateRendererProps>;
  Controls: React.ComponentType<SlateControlsProps>;
  name: string;
  version: string;
  translations: typeof defaultTranslations;
  migrations: typeof migrations;
  createInitialSlateState: CreateInitialStateCustomizer;
  allowInlineNeighbours: boolean;
  hideInMenu?: boolean;
  theme?: Theme;
};
type DefaultSlateDefinition = SlateDefinition & {
  plugins: typeof defaultPlugins;
};
export type CreateInitialStateCustomizer = ({
  plugins,
}: {
  plugins: SlatePluginCollection;
}) => InitialSlateStateDef;

const defaultConfig: DefaultSlateDefinition = {
  icon: <Subject />,
  plugins: defaultPlugins,
  Renderer,
  Controls,
  name: 'ory/editor/core/content/slate',
  version: '0.0.3',
  translations: defaultTranslations,
  migrations,

  createInitialSlateState: ({ plugins }) => ({
    children: [
      {
        plugin: plugins.paragraphs.paragraph,
        children: [''],
      },
    ],
  }),
  allowInlineNeighbours: true,
};

type CreateInitialSlateState = (
  custom?: CreateInitialStateCustomizer
) => { editorState: Value };
export type SlatePlugin = ContentPluginConfig<SlateState> & {
  createInitialSlateState: CreateInitialSlateState;
};
export type SlateCustomizeFunction = (
  def: DefaultSlateDefinition
) => SlateDefinition;
export default (customize?: SlateCustomizeFunction): SlatePlugin => {
  const settings = customize ? customize(defaultConfig) : defaultConfig;
  const createInitialState = (
    customizeInitialSlateState?: CreateInitialStateCustomizer
  ) => {
    const func = customizeInitialSlateState || settings.createInitialSlateState;

    return transformInitialSlateState(func({ plugins: settings.plugins }));
  };

  // plugins should be flatten
  // NEW: to make it easier to manage and group plugins,
  // they now need to be an object of object with group and keys, see type SlatePluginCollection
  const plugins = makeSlatePluginsFromDef(settings.plugins);
  const serializeFunctions = serialization({
    createInitialState,
    plugins,
  });
  return {
    Component: (props: SlateProps) => (
      <Component
        Renderer={settings.Renderer}
        Controls={settings.Controls}
        plugins={plugins}
        translations={settings.translations}
        serializeFunctions={serializeFunctions}
        {...props}
        theme={settings.theme}
      />
    ),

    name: settings.name,
    version: settings.version,
    IconComponent: settings.icon,
    text: settings.translations.pluginName,
    description: settings.translations.pluginDescription,
    hideInMenu: settings.hideInMenu,
    allowInlineNeighbours: settings.allowInlineNeighbours,

    // tslint:disable-next-line:no-any
    reducer: (state: any, action: AnyAction) => {
      if (
        (action.type === ActionTypes.UNDO ||
          action.type === ActionTypes.REDO) &&
        pathOr(false, ['content', 'state', 'editorState'], state)
      ) {
        return {
          ...state,
          content: {
            ...state.content,
            state: {
              ...state.content.state,
              editorState: state.content.state.editorState.merge({
                isNative: false,
              }),
            },
          },
        };
      }
      return state;
    },

    handleRemoveHotKey: hooks.handleRemoveHotKey,
    handleFocusPreviousHotKey: hooks.handleFocusPreviousHotKey,
    handleFocusNextHotKey: hooks.handleFocusNextHotKey,
    createInitialState: createInitialState,
    createInitialSlateState: createInitialState,
    serialize: serializeFunctions.serialize,
    unserialize: serializeFunctions.unserialize,

    // TODO this is disabled because of #207
    // merge = hooks.merge
    // split = hooks.split

    migrations: settings.migrations,
  };
};
