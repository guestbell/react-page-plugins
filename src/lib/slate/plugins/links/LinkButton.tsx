import * as React from 'react';
import { useSlate } from 'slate-react';
import SlateButton from '../../../common/components/slateEditor/SlateButton';
import { isLinkActive, getLinkUrl } from './withLinks';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Range } from 'slate';
import { lazyLoad } from '@react-page/editor';

export interface LinkButtonProps {
  disabled?: boolean;
}

const LinkIcon = lazyLoad(() => import('@material-ui/icons/Link'));

export const LinkButton: React.FC<LinkButtonProps> = ({ disabled }) => {
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

  const clearLink = React.useCallback(
    (e: React.MouseEvent) => {
      editor.selection = selection;
      editor.unwrapLink();
      handleClose();
    },
    [selection]
  );

  const commitLink = React.useCallback(
    (e: React.MouseEvent) => {
      if (url) {
        editor.selection = selection;
        editor.wrapLink(url);
      }
      handleClose();
    },
    [url, selection]
  );

  React.useEffect(() => {
    setUrl(storedUrl);
  }, [storedUrl]);

  return (
    <>
      <SlateButton
        disabled={disabled}
        isActive={isActive}
        onClick={handleClickOpen}
        icon={<LinkIcon />}
        title="Link"
      />
      <Dialog
        onClose={handleClose}
        open={open}
        disableEnforceFocus={true}
        disableAutoFocus={true}
      >
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
