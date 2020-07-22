import * as React from 'react';
import { Content } from '../../types/content/Content';
import { ContentType } from '../../types/content/enum/ContentType';
import SlateRenderer, {
  SlateRendererProps,
} from '../slateRenderer/SlateRenderer';
import migrations from '../../slateMigrations/migrations';
import { SlateValue } from '../../types/slate/SlateValue';
import rules from '../slateRenderer/rules';
import { HTMLRenderer } from '@react-page/renderer';
import { EditableType } from '@react-page/core/lib/types/editable';
import { Plugins } from '@react-page/core/lib/service/plugin/classes';

export interface ContentRendererProps {
  value: Content;
  lang: string;
  defaultLang: string;
  slateProps?: SlateRendererProps;
  reactPagePlugins?: Plugins;
  showInvalid?: boolean;
}

const ContentRenderer: React.FC<ContentRendererProps> = props => {
  const { value, lang, defaultLang, showInvalid } = props;
  let instance = value && value.data && value.data.find(d => d.lang === lang);
  const defInstance =
    value && value.data && value.data.find(d => d.lang === defaultLang);
  if (!instance || instance.useDefault || (!showInvalid && !instance.isValid)) {
    instance = defInstance;
  }
  if (!instance) {
    return null;
  }
  if (value.type === ContentType.Plain) {
    return <>{instance.data}</>;
  }
  if (value.type === ContentType.Slate) {
    return (
      <SlateRenderer
        value={instance.data as SlateValue}
        migrations={migrations}
        textRule={rules.textRule}
        nodeRule={rules.nodeRule}
        version={instance.version}
      />
    );
  }
  if (value.type === ContentType.ReactPage) {
    return (
      <HTMLRenderer
        state={instance.data as EditableType}
        plugins={props.reactPagePlugins}
      />
    );
  }
  return null;
};

export default ContentRenderer;
