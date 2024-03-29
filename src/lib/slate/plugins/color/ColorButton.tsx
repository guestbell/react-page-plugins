import * as React from 'react';
import { useSlate } from 'slate-react';
import SlateButton from '../../../common/components/slateEditor/SlateButton';
import { isColorActive, getActiveColors } from './withColors';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { lazyLoad } from '@react-page/editor';
import { ChromePicker, ColorResult, RGBColor } from 'react-color';
import { Range } from 'slate';
import { makeStyles } from '@mui/styles';

export interface ColorButtonCustomProps {
  disabled?: boolean;
}

const useStyles = makeStyles({
  chromePicker: {
    boxShadow: 'none !important',
  },
});

// Because types are broken and not accepting className
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChromePickerUntyped = ChromePicker as any;

type ColorButtonProps = ColorButtonCustomProps;

const FormatColorTextIcon = lazyLoad(() =>
  import('@mui/icons-material/FormatColorText')
);

export const ColorButtonRaw: React.FC<ColorButtonProps> = ({ disabled }) => {
  const classes = useStyles();
  const editor = useSlate();
  const [open, setOpen] = React.useState(false);
  const [selection, setSelection] = React.useState<Range>(editor.selection);
  const [isActive, setActive] = React.useState(isColorActive(editor));
  const handleClickOpen = () => {
    const colors = getActiveColors(editor);
    if (colors && colors[0]) {
      setColor(colors[0]);
    }
    setSelection(editor.selection);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeColor = (colorResult: ColorResult, e: React.ChangeEvent) => {
    e.preventDefault();
    setColor(colorResult.rgb);
  };

  const clearColor = () => {
    editor.selection = selection;
    editor.unwrapColor();
    handleClose();
  };

  const commitColor = () => {
    editor.selection = selection;
    editor.wrapColor(color);
    handleClose();
  };

  const [color, setColor] = React.useState<RGBColor>({
    r: 16,
    g: 189,
    b: 199,
    a: 1,
  });
  const isActiveNow = isColorActive(editor);
  if (!open && isActiveNow !== isActive) {
    setActive(isColorActive(editor));
  }
  return (
    <>
      <SlateButton
        disabled={disabled}
        isActive={isActive}
        onClick={handleClickOpen}
        icon={<FormatColorTextIcon />}
        title="Text color"
      />
      <Dialog onClose={handleClose} open={open}>
        <DialogContent>
          <ChromePickerUntyped
            className={classes.chromePicker}
            onChange={changeColor}
            color={color}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={clearColor} disabled={!isActive}>
            Clear
          </Button>
          <Button onClick={commitColor} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ColorButtonRaw;
