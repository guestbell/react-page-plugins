import * as React from 'react';
import { useSlate } from 'slate-react';
import SlateButton from '../../Controls/buttons/SlateButton';
import {
  isEmphasizeActive,
  EmphasizeTypes,
  EmphasizeCommands,
} from './withEmphasize';
import { lazyLoad } from '@react-page/core';

export interface EmphasizeButtonProps {
  type: EmphasizeTypes;
}

const names = {
  [EmphasizeTypes.Bold]: 'Bold',
  [EmphasizeTypes.Italic]: 'Italic',
  [EmphasizeTypes.Underline]: 'Underline',
};
const ItalicIcon = lazyLoad(() => import('@material-ui/icons/FormatItalic'));
const FormatBold = lazyLoad(() => import('@material-ui/icons/FormatBold'));
const FormatUnderlined = lazyLoad(() =>
  import('@material-ui/icons/FormatUnderlined')
);
const icons = {
  [EmphasizeTypes.Bold]: <FormatBold />,
  [EmphasizeTypes.Italic]: <ItalicIcon />,
  [EmphasizeTypes.Underline]: <FormatUnderlined />,
};

export const EmphasizeButton: React.FC<EmphasizeButtonProps> = ({ type }) => {
  const editor = useSlate();
  return (
    <SlateButton
      isActive={isEmphasizeActive(editor, type)}
      onClick={event => {
        event.preventDefault();
        editor.exec({
          type: EmphasizeCommands.ToggleEmphasize,
          mark: { type },
        });
      }}
      icon={icons[type]}
      title={names[type]}
    />
  );
};
