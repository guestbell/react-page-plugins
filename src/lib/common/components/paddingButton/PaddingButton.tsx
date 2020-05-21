import IconButton from '@material-ui/core/IconButton';
import { connect, Selectors, Cell } from '@react-page/core';
import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import PaddingSlider from './PaddingSlider';
import { Dispatch, bindActionCreators } from 'redux';
import {
  UpdateCellContentAction,
  updateCellContent as updateCellContentInternal,
  updateCellLayout as updateCellLayoutInternal,
} from '@react-page/core/lib/actions/cell';
import { ComponetizedCell } from '@react-page/core/lib/types/editable';
import { PaddingState } from '../../types/padding/PaddingState';
import VerticalAlignCenterIcon from '@material-ui/icons/VerticalAlignCenter';

export interface PaddingButtonCustomProps {
  id: string;
  editable: string;
  focusedCellClassName?: string;
}

type ReduxProps = {
  node?: Cell;
  updateCellContent: (state: PaddingState) => void;
  updateCellLayout: (state: PaddingState) => void;
};

type ActionCreatorsTypes = {};

type PaddingButtonProps = PaddingButtonCustomProps &
  ReduxProps &
  ActionCreatorsTypes;

const dialogClasses = { paper: 'bottomToolbar__paddingModal' };

const PaddingButton: React.FC<PaddingButtonProps> = props => {
  const { node, updateCellContent, updateCellLayout } = props;
  const isContentCell = Boolean(node?.content?.state);
  const updateCell = isContentCell ? updateCellContent : updateCellLayout;
  const nodeAbove =
    (node?.content?.state as PaddingState)?.above ||
    (node?.layout?.state as PaddingState)?.above;
  const nodeBelow =
    (node?.content?.state as PaddingState)?.below ||
    (node?.layout?.state as PaddingState)?.below;

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
      updateCell({ above: val, below: spaceBelow });
    },
    [spaceBelow, updateCell]
  );
  const onSpaceBelowChange = React.useCallback(
    val => {
      setSpaceBelow(val);
      updateCell({ above: spaceAbove, below: val });
    },
    [spaceAbove, updateCell]
  );

  const onCancelClick = React.useCallback(() => {
    closeModal();
    updateCell(initialState);
  }, [closeModal, initialState, updateCell]);
  const onOkClick = React.useCallback(() => {
    const newState = { above: spaceAbove, below: spaceBelow };
    updateCell(newState);
    setInitialState({ ...newState });
    closeModal();
  }, [closeModal, updateCell, updateCell, spaceAbove, spaceBelow]);
  return node ? (
    <>
      <IconButton
        className="bottomToolbar__paddingButton"
        onClick={openModal}
        color="default"
        title="Padding"
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
            color="default"
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

const mapStateToProps = createStructuredSelector({
  node: Selectors.Editable.node,
});

const mapDispatchToProps = (
  dispatch: Dispatch<UpdateCellContentAction>,
  { id }: ComponetizedCell
) =>
  bindActionCreators(
    {
      updateCellContent: updateCellContentInternal(id),
      updateCellLayout: updateCellLayoutInternal(id),
    },
    // tslint:disable-next-line:no-any
    dispatch as any
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaddingButton) as React.FC<PaddingButtonCustomProps>;
