import * as React from 'react';
import { Content } from '../../types/content/Content';
import { ContentType } from '../../types/content/enum/ContentType';
import SlateRenderer, {
  SlateRendererProps,
} from '../slateRenderer/SlateRenderer';
import migrations from '../../slateMigrations/migrations';
import { SlateValue } from '../../types/slate/SlateValue';
import rules from '../slateRenderer/rules';

export interface ContentRendererProps {
  value: Content;
  lang: string;
  defaultLang: string;
  slateProps?: SlateRendererProps;
}

const ContentRenderer: React.FC<ContentRendererProps> = props => {
  const { value, lang, defaultLang } = props;
  const instance =
    value &&
    value.data &&
    (value.data.find(d => d.lang === lang) ||
      value.data.find(d => d.lang === defaultLang));
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
      />
    );
  }
  return null;
};

export default ContentRenderer;
