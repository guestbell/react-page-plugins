import * as React from 'react';
import { useSlateStatic } from 'slate-react';
import SlateButton from '../../../common/components/slateEditor/SlateButton';
import { EmphasizeTypes } from './';
import { lazyLoad } from '@react-page/editor';

export interface EmphasizeButtonProps {
  type: EmphasizeTypes;
  disabled?: boolean;
}

const names = {
  [EmphasizeTypes.Bold]: 'Bold',
  [EmphasizeTypes.Italic]: 'Italic',
  [EmphasizeTypes.Underline]: 'Underline',
};
const ItalicIcon = lazyLoad(() => import('@mui/icons-material/FormatItalic'));
const FormatBold = lazyLoad(() => import('@mui/icons-material/FormatBold'));
const FormatUnderlined = lazyLoad(() =>
  import('@mui/icons-material/FormatUnderlined')
);
const icons = {
  [EmphasizeTypes.Bold]: <FormatBold />,
  [EmphasizeTypes.Italic]: <ItalicIcon />,
  [EmphasizeTypes.Underline]: <FormatUnderlined />,
};

export const EmphasizeButton: React.FC<EmphasizeButtonProps> = ({
  type,
  disabled,
}) => {
  const editor = useSlateStatic();
  return (
    <SlateButton
      isActive={editor.isEmphasizeActive(type)}
      onClick={event => {
        event.preventDefault();
        editor.toggleEmphasis(type);
      }}
      icon={icons[type]}
      title={names[type]}
      disabled={disabled}
    />
  );
};
