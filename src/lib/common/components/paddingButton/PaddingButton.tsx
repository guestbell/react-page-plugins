import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import PaddingSlider from './PaddingSlider';
import { useDebouncedCellData, useCell } from '@react-page/editor';
import { PaddingState } from '../../types/padding/PaddingState';
import VerticalAlignCenterIcon from '@mui/icons-material/VerticalAlignCenter';

export interface PaddingButtonCustomProps {
  nodeId: string;
  focusedCellClassName?: string;
}

type PaddingButtonProps = PaddingButtonCustomProps;

const dialogClasses = { paper: 'bottomToolbar__paddingModal' };

export const PaddingButton: React.FC<PaddingButtonProps> = props => {
  const { nodeId } = props;
  const cell = useCell(nodeId);
  const [data, updater] = useDebouncedCellData(nodeId);
  const nodeAbove = (data as PaddingState)?.above;
  const nodeBelow = (data as PaddingState)?.below;

  const [initialState, setInitialState] = React.useState<PaddingState>({
    above: nodeAbove,
    below: nodeBelow,
  });

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const resetState = React.useCallback(() => {
    setSpaceAbove(nodeAbove);
    setSpaceBelow(nodeBelow);
  }, [isModalOpen, nodeAbove, nodeBelow]);
  const closeModal = React.useCallback(() => {
    setIsModalOpen(false);
    resetState();
  }, [resetState]);
  const openModal = React.useCallback(() => {
    setIsModalOpen(true);
    resetState();
  }, [resetState]);
  const [spaceAbove, setSpaceAbove] = React.useState(nodeAbove);
  const [spaceBelow, setSpaceBelow] = React.useState(nodeBelow);
  const onSpaceAboveChange = React.useCallback(
    val => {
      setSpaceAbove(val);
      updater({ above: val }, {});
    },
    [updater]
  );
  const onSpaceBelowChange = React.useCallback(
    val => {
      setSpaceBelow(val);
      updater({ below: val }, null);
    },
    [updater]
  );

  const onCancelClick = React.useCallback(() => {
    closeModal();
    updater(initialState as { [key: string]: unknown }, null);
  }, [closeModal, initialState, updater]);
  const onOkClick = React.useCallback(() => {
    const newState = { above: spaceAbove, below: spaceBelow };
    updater(newState, null);
    setInitialState({ ...newState });
    closeModal();
  }, [closeModal, updater, spaceAbove, spaceBelow]);
  return cell ? (
    <>
      <IconButton
        className="bottomToolbar__paddingButton"
        onClick={openModal}
        color="default"
        title="Padding"
        size="large"
      >
        <VerticalAlignCenterIcon />
      </IconButton>
      <Dialog
        classes={dialogClasses}
        open={isModalOpen}
        onClose={onCancelClick}
      >
        <DialogTitle id="responsive-dialog-title">
          Add space around your content
        </DialogTitle>
        <DialogContent>
          <PaddingSlider
            title="Space above"
            value={spaceAbove}
            onValueChange={onSpaceAboveChange}
          />
          <PaddingSlider
            title="Space below"
            value={spaceBelow}
            onValueChange={onSpaceBelowChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            className="bottomToolbar__paddingButton__cancel"
            onClick={onCancelClick}
          >
            Cancel
          </Button>
          <Button
            className="bottomToolbar__paddingButton__ok"
            onClick={onOkClick}
            color="primary"
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  ) : null;
};
