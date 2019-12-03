import * as React from 'react';
import { useSlate } from 'slate-react';
import SlateButton from '../../Controls/buttons/SlateButton';
import { isMarkActive, MarkTypes } from './withMarks';

export interface MarkButtonProps {
  type: MarkTypes;
  icon: JSX.Element;
}

export const MarkButton: React.FC<MarkButtonProps> = ({ type, icon }) => {
  const editor = useSlate();
  return (
    <SlateButton
      isActive={isMarkActive(editor, type)}
      onClick={event => {
        event.preventDefault();
        editor.exec({ type: 'toggle_mark', mark: { type } });
      }}
      icon={icon}
    />
  );
};
