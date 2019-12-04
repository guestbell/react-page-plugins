import * as React from 'react';
import { useSlate } from 'slate-react';
import SlateButton from '../../Controls/buttons/SlateButton';
import { isQuoteActive, QuoteCommands } from './withQuotes';
import { lazyLoad } from '@react-page/core';

export interface QuoteButtonProps {}

const FormatQuoteIcon = lazyLoad(() =>
  import('@material-ui/icons/FormatQuote')
);

export const QuoteButton: React.FC<QuoteButtonProps> = () => {
  const editor = useSlate();
  const isActive = isQuoteActive(editor);
  return (
    <SlateButton
      isActive={isActive}
      onClick={event => {
        event.preventDefault();
        editor.exec({ type: QuoteCommands.ToggleQuote });
      }}
      icon={<FormatQuoteIcon />}
      title="Quote"
    />
  );
};
