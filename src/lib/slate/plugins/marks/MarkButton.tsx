import * as React from 'react';
import { useSlate } from 'slate-react';
import SlateButton from '../../Controls/buttons/SlateButton';
import { isMarkActive, MarkTypes } from './withMarks';
import { lazyLoad } from '@react-page/core';

export interface MarkButtonProps {
  type: MarkTypes;
}

const names = {
  [MarkTypes.Bold]: 'Bold',
  [MarkTypes.Italic]: 'Italic',
  [MarkTypes.Underline]: 'Underline',
};
const ItalicIcon = lazyLoad(() => import('@material-ui/icons/FormatItalic'));
const FormatBold = lazyLoad(() => import('@material-ui/icons/FormatBold'));
const FormatUnderlined = lazyLoad(() =>
  import('@material-ui/icons/FormatUnderlined')
);
const icons = {
  [MarkTypes.Bold]: <FormatBold />,
  [MarkTypes.Italic]: <ItalicIcon />,
  [MarkTypes.Underline]: <FormatUnderlined />,
};

export const MarkButton: React.FC<MarkButtonProps> = ({ type }) => {
  const editor = useSlate();
  return (
    <SlateButton
      isActive={isMarkActive(editor, type)}
      onClick={event => {
        event.preventDefault();
        editor.exec({ type: 'toggle_mark', mark: { type } });
      }}
      icon={icons[type]}
      title={names[type]}
    />
  );
};
