import * as React from 'react';

import { ContentPluginConfig } from '@react-page/core/lib/service/plugin/classes';
import Slate from './Component';
import { SlateSettings } from './types/settings';
import { SlateProps } from './types/component';
import { SlateState } from './types/state';
import { defaultSettings } from './default/settings';
import { lazyLoad } from '@react-page/core';
import { SLATE_VERSION } from '../common/constants/SlateConstants';
import { slateEmptyValue } from '../common/components/slateEditor/slateEmptyValue';

const Subject = lazyLoad(() => import('@material-ui/icons/Subject'));

const createPlugin: (
  settings: SlateSettings
) => ContentPluginConfig<SlateState> = settings => {
  const mergedSettings = { ...defaultSettings, ...settings };
  const WrappedComponent: React.SFC<SlateProps> = props => (
    <Slate {...props} {...mergedSettings} />
  );
  return {
    Component: WrappedComponent,
    name: 'ory/editor/core/content/slate',
    version: '0.0.3',
    IconComponent: <Subject />,
    text: mergedSettings.translations.pluginName,
    description: mergedSettings.translations.pluginDescription,
    createInitialState: () => ({
      version: SLATE_VERSION,
      value: slateEmptyValue(),
    }),
  };
};

export default createPlugin;
