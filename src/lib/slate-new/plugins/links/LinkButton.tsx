import * as React from 'react';
import { useSlate } from 'slate-react';
import SlateButton from '../../Controls/buttons/SlateButton';
import { isLinkActive } from './withLinks';

export interface LinkButtonProps {
  icon: JSX.Element;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ icon }) => {
  const editor = useSlate();
  const isActive = isLinkActive(editor);
  return (
    <SlateButton
      isActive={isActive}
      onClick={event => {
        event.preventDefault();
        if (isActive) {
          editor.exec({ type: 'remove_link' });
        } else {
          const url = window.prompt('Enter the URL of the link:');
          if (!url) {
            return;
          }
          editor.exec({ type: 'insert_link', url });
        }
      }}
      icon={icon}
    />
  );
};
