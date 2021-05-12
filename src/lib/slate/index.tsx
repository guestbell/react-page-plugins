import createPlugin from './createPlugin';
// import SlateHtmlRenderer from './Renderer/SlateHtmlRenderer';
import { lazyLoad } from '@react-page/editor';
import { MakeOptional } from '../common/types/makeOptional';
import { SlateSettings } from './types/settings';

/*const SlateDefaultControls = lazyLoad(() =>
  import('./Controls/SlateDefaultControls')
);*/

const SlateDefaultRenderer = lazyLoad(() =>
  import('./Renderer/SlateHtmlRenderer')
);

export default (settings?: MakeOptional<SlateSettings, 'Renderer'>) => {
  const plugin = createPlugin({
    Renderer: SlateDefaultRenderer,
    // Controls: SlateDefaultControls,
    ...settings,
  });
  return plugin;
};
