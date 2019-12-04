import * as React from 'react';
import { useSlate } from 'slate-react';
import SlateButton from '../../Controls/buttons/SlateButton';
import { isColorActive, ColorCommands } from './withColors';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { lazyLoad } from '@react-page/core';
import { ChromePicker, Color, ColorResult } from 'react-color';
import withStyles, { WithStyles } from '@material-ui/styles/withStyles';
import createStyles from '@material-ui/styles/createStyles';
import { Range, Editor } from 'slate';

export interface ColorButtonCustomProps {}

const styles = createStyles({
  chromePicker: {
    boxShadow: 'none !important',
  },
});

// Because types are broken and not accepting className
// tslint:disable-next-line: no-any
const ChromePickerUntyped = ChromePicker as any;

type ColorButtonProps = ColorButtonCustomProps & WithStyles<typeof styles>;

const FormatColorTextIcon = lazyLoad(() =>
  import('@material-ui/icons/FormatColorText')
);

export const ColorButtonRaw: React.FC<ColorButtonProps> = props => {
  const { classes } = props;
  const editor = useSlate();
  const [open, setOpen] = React.useState(false);
  const [selection, setSelection] = React.useState<Range>(editor.selection);
  const handleClickOpen = () => {
    setSelection(editor.selection);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeColor = (colorResult: ColorResult) => {
    setColor(colorResult.rgb);
  };

  const clearColor = () => {
    Editor.setSelection(editor, selection);
    editor.exec({ type: ColorCommands.ClearColor });
    handleClose();
  };

  const commitColor = () => {
    Editor.setSelection(editor, selection);
    editor.exec({ type: ColorCommands.SetColor, color: color });
    handleClose();
  };

  const [color, setColor] = React.useState<Color>({
    r: 16,
    g: 189,
    b: 199,
    a: 1,
  });
  const isActive = isColorActive(editor);
  return (
    <>
      <SlateButton
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

export default withStyles(styles)(ColorButtonRaw);
