import { Value } from 'slate';
import { Editor } from 'slate-react';
import { JsonSchema } from '../../createPluginMaterialUi';
import { Translations } from './translations';
import { EventHook } from 'slate-react';

export interface PluginButtonProps {
  editor: Editor;
  editorState: Value;
  translations: Partial<Translations>;
}

export type SlatePluginControls<T extends {}> = {
  open: boolean;
  close: () => void;
  isActive: boolean;

  cancelLabel?: string;
  submitLabel?: string;
  removeLabel?: string;
  schema?: JsonSchema<T>;
  data: T;
  add: (data?: T) => void;
  addWithText: (text: string, data?: T) => void;
  remove: () => void;
  shouldInsertWithText: boolean;
  getInitialData?: () => T;
} & PluginButtonProps;

export type SlateBasePluginDefinition<T extends {}> = {
  hotKey?: string;
  onKeyDown?: EventHook<React.KeyboardEvent>;
  schema?: JsonSchema<T>;
  Controls?: React.ComponentType<SlatePluginControls<T>>;
  icon?: JSX.Element;
  addHoverButton: boolean;
  addToolbarButton: boolean;
  customAdd?: (editor: Editor) => void;
  customRemove?: (editor: Editor) => void;
  isDisabled?: (editor: Editor) => boolean;
  getInitialData?: () => T;
};

export type SlateNodeBasePluginDefinition<T extends {}> = {
  object: SlateNodeObjectType;
} & SlateBasePluginDefinition<T>;
export type SlateNodeObjectType = 'inline' | 'block' | 'mark';

export type SlateDataPluginDefinition<
  T extends {}
> = SlateNodeBasePluginDefinition<T> & {
  dataMatches: (data: MapLike<T>) => boolean;
};

export type SlateCustomPluginDefinition<
  T extends {}
> = SlateBasePluginDefinition<T> & {};

export type MapLike<T extends {}> = {
  get<K extends keyof T>(key: K): T[K];
};

type ObjectProps = {
  object: 'block';
  replaceOnRemove?: string;
};

type InlineProps = {
  object: 'inline';
};

type MarkProps = {
  object: 'mark';
};

export type SlateComponentPluginDefinition<
  T extends {}
> = SlateNodeBasePluginDefinition<T> & {
  type: string;

  deserialize?: {
    tagName: string;
    getData?: (el: HTMLElement) => T;
  };
  Component: React.ComponentType<{
    attributes?: object;
    data: MapLike<T>;
  }>;
} & (ObjectProps | InlineProps | MarkProps);

export type SlatePluginDefinition<T extends {}> =
  | (SlateComponentPluginDefinition<T> & { pluginType: 'component' })
  | (SlateDataPluginDefinition<T> & { pluginType: 'data' })
  | (SlateCustomPluginDefinition<T> & { pluginType: 'custom' });
