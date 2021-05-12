import * as React from 'react';

import { SlateSettings } from './types/settings';
import { SlateState } from './types/state';
import { defaultSettings } from './default/settings';
import { lazyLoad } from '@react-page/editor';
import { SLATE_VERSION } from '../common/constants/SlateConstants';
import { slateEmptyValue } from '../common/components/slateEditor/slateEmptyValue';
import { CellPlugin } from '@react-page/editor';
import SlateProvider from './Provider/SlateProvider';

const Subject = lazyLoad(() => import('@material-ui/icons/Subject'));

const id = 'ory/editor/core/content/slate';
const version = 3;

const createPlugin: (
  settings: SlateSettings
) => CellPlugin<SlateState> = settings => {
  const mergedSettings = { ...defaultSettings, ...settings };
  const { Controls, Renderer, ...rest } = mergedSettings;
  const createInitialState = () => ({
    version: SLATE_VERSION,
    value: slateEmptyValue(),
  });
  return {
    id,
    version,
    IconComponent: <Subject />,
    title: mergedSettings.translations.pluginName,
    description: mergedSettings.translations.pluginDescription,
    Provider: props => <SlateProvider {...props} />,
    Renderer: props => <Renderer {...props} {...rest} />,
    controls: {
      type: 'custom',
      Component: props => <Controls {...props} {...rest} />,
    },
    createInitialState,
    allowClickInside: true,
  } as CellPlugin<SlateState>;
};

export default createPlugin;
