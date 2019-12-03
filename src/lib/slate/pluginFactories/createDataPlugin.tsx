import SlatePlugin from '../types/SlatePlugin';
import createBasePlugin from './createBasePlugin';
import { SlateDataPluginDefinition } from '../types/slatePluginDefinitions';

function createDataPluginWithDefinition<T extends {}>(
  pluginDefinition: SlateDataPluginDefinition<T>
): SlatePlugin {
  return {
    ...createBasePlugin<T>({ ...pluginDefinition, pluginType: 'data' }),
  };
}

type CustomizeFunction<T extends {}> = (
  def: SlateDataPluginDefinition<T>
) => SlateDataPluginDefinition<T>;

function createDataPlugin<T extends {}>(
  definition: SlateDataPluginDefinition<T>
) {
  return (customize?: CustomizeFunction<T>): SlatePlugin => {
    return createDataPluginWithDefinition<T>(
      customize ? customize(definition) : definition
    );
  };
}

export default createDataPlugin;
