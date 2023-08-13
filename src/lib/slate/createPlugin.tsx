import * as React from 'react';

import { SlateSettings } from './types/settings';
import { SlateState } from './types/state';
import { defaultSettings } from './default/settings';
import { SLATE_VERSION } from '../common/constants/SlateConstants';
import { slateEmptyValue } from '../common/components/slateEditor/slateEmptyValue';
import { CellPlugin } from '@react-page/editor';
import SlateProvider from './Provider/SlateProvider';

const id = 'ory/editor/core/content/slate';
const version = 3;

const createPlugin: (
  settings: SlateSettings
) => CellPlugin<SlateState> = settings => {
  const mergedSettings = { ...defaultSettings, ...settings };
  const { Renderer, ...rest } = mergedSettings;
  const createInitialState = () => ({
    version: SLATE_VERSION,
    value: slateEmptyValue(),
  });
  return {
    id,
    version,
    icon: mergedSettings.icon,
    title: mergedSettings.translations.pluginName,
    description: mergedSettings.translations.pluginDescription,
    Provider: props => <SlateProvider {...props} />,
    Renderer: props => <Renderer {...props} {...rest} />,
    createInitialState,
    allowClickInside: true,
  } as CellPlugin<SlateState>;
};

export default createPlugin;
