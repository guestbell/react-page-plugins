import * as React from 'react';
import { useSlateStatic } from 'slate-react';
import SlateButton from '../../../common/components/slateEditor/SlateButton';
import { EmphasizeTypes } from './';
import { lazyLoad } from '@react-page/editor';

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
    />
  );
};
