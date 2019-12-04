import * as React from 'react';
import { useSlate } from 'slate-react';
import SlateButton from '../../Controls/buttons/SlateButton';
import { isAlignmentActive, AlignmentTypes } from './withAlignments';

export interface AlignmentButtonProps {
  alignment: AlignmentTypes;
  icon: JSX.Element;
}

const names = {
  [AlignmentTypes.Left]: 'Align left',
  [AlignmentTypes.Right]: 'Align right',
  [AlignmentTypes.Center]: 'Align center',
  [AlignmentTypes.Justify]: 'Align justify',
};

export const AlignmentButton: React.FC<AlignmentButtonProps> = ({
  alignment,
  icon,
}) => {
  const editor = useSlate();
  return (
    <SlateButton
      isActive={isAlignmentActive(editor, alignment)}
      onClick={event => {
        event.preventDefault();
        editor.exec({ type: 'toggle_alignment', alignment });
      }}
      icon={icon}
      title={names[alignment]}
    />
  );
};
