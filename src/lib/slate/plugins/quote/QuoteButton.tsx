import * as React from 'react';
import { useSlate } from 'slate-react';
import SlateButton from '../../../common/components/slateEditor/SlateButton';
import { isQuoteActive } from './withQuotes';
import { lazyLoad } from '@react-page/editor';

export interface QuoteButtonProps {}

const FormatQuoteIcon = lazyLoad(() =>
  import('@mui/icons-material/FormatQuote')
);

export const QuoteButton: React.FC<QuoteButtonProps> = () => {
  const editor = useSlate();
  const isActive = isQuoteActive(editor);
  return (
    <SlateButton
      isActive={isActive}
      onClick={event => {
        event.preventDefault();
        editor.toggleQuote();
      }}
      icon={<FormatQuoteIcon />}
      title="Quote"
    />
  );
};
