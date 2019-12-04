import * as React from 'react';
import { useSlate } from 'slate-react';
import SlateButton from '../../Controls/buttons/SlateButton';
import { isLinkActive, getLinkUrl } from './withLinks';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Editor, Range } from 'slate';
import { lazyLoad } from '@react-page/core';

export interface LinkButtonProps {}

const LinkIcon = lazyLoad(() => import('@material-ui/icons/Link'));

export const LinkButton: React.FC<LinkButtonProps> = () => {
  const editor = useSlate();
  const isActive = isLinkActive(editor);
  const [open, setOpen] = React.useState(false);
  const storedUrl = getLinkUrl(editor) || '';
  const [url, setUrl] = React.useState(storedUrl);
  const [selection, setSelection] = React.useState<Range>(editor.selection);
  const changeColor: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = e => {
    setUrl(e.target.value);
  };
  const handleClickOpen = () => {
    setSelection(editor.selection);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const clearLink = () => {
    Editor.setSelection(editor, selection);
    editor.exec({ type: 'remove_link' });
    handleClose();
  };

  const commitLink = () => {
    Editor.setSelection(editor, selection);
    editor.exec({ type: 'insert_link', url });
    handleClose();
  };

  React.useEffect(() => {
    setUrl(storedUrl);
  }, [storedUrl]);

  return (
    <>
      <SlateButton
        isActive={isActive}
        onClick={handleClickOpen}
        icon={<LinkIcon />}
        title="Link"
      />
      <Dialog onClose={handleClose} open={open}>
        <DialogContent>
          <TextField label="Link url" onChange={changeColor} value={url} />
        </DialogContent>
        <DialogActions>
          <Button onClick={clearLink} disabled={!isActive}>
            Clear
          </Button>
          <Button onClick={commitLink} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
