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

import { BackgroundSettings } from './types/settings';
import { BackgroundState } from './types/state';
import { defaultSettings } from './default/settings';
import { CellPlugin } from '@react-page/editor';
import { BackgroundProvider } from './Provider/BackgroundProvider';

const createCell = (settings: BackgroundSettings) => {
  const mergedSettings = { ...defaultSettings, ...settings };
  const { Controls, Renderer, ...rest } = mergedSettings;

  const plugin: CellPlugin<BackgroundState> = {
    Provider: props => <BackgroundProvider {...props} {...rest} />,
    controls: {
      type: 'custom',
      Component: props => <Controls {...props} {...rest} />,
    },
    Renderer: props => <Renderer {...props} {...rest} />,

    id: 'ory/editor/core/layout/background',
    version: 1,

    title: mergedSettings.translations.pluginName,
    description: mergedSettings.translations.pluginDescription,
    icon: mergedSettings.icon,

    createInitialChildren: settings.getInitialChildren,
    cellStyle: mergedSettings.cellStyle,
  };
  return plugin;
};

export default createCell;
