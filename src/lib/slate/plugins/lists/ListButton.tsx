import * as React from 'react';
import { useSlate } from 'slate-react';
import SlateButton from '../../../common/components/slateEditor/SlateButton';
import { isListActive, ListTypes } from './';

export interface ListButtonProps {
  icon: JSX.Element;
  type: ListTypes;
}

export const ListButton: React.FC<ListButtonProps> = ({ icon, type }) => {
  const editor = useSlate();
  const isActive = isListActive(editor, type);
  return (
    <SlateButton
      isActive={isActive}
      onClick={event => {
        event.preventDefault();
        editor.toggleList(type);
      }}
      icon={icon}
      title={type === ListTypes.UL ? 'Bulleted list' : 'Numbered list'}
    />
  );
};
