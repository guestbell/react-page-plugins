import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import { useRemoveCell } from '@react-page/editor';

export interface DeleteButtonProps {
  nodeId: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ nodeId }) => {
  const onDelete = useRemoveCell(nodeId);
  return onDelete ? (
    <IconButton
      className="bottomToolbar__deleteButton"
      onClick={onDelete}
      aria-label="delete"
      color="default"
      title="Delete"
    >
      <Delete />
    </IconButton>
  ) : null;
};

export default DeleteButton;
