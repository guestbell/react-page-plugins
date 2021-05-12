import * as React from 'react';
import { useSlate } from 'slate-react';
import SlateButton from '../../../common/components/slateEditor/SlateButton';
import { isHeadingActive, HeadingLevels } from './';

export interface HeadingButtonProps {
  icon: JSX.Element;
  level: HeadingLevels;
}

export const HeadingButton: React.FC<HeadingButtonProps> = ({
  icon,
  level,
}) => {
  const editor = useSlate();
  const isActive = isHeadingActive(editor, level);
  return (
    <SlateButton
      isActive={isActive}
      onClick={event => {
        event.preventDefault();
        editor.wrapHeading(level);
      }}
      icon={icon}
    />
  );
};
