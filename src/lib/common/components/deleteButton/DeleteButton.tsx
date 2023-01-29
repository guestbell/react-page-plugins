import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';
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
      size="large"
    >
      <Delete />
    </IconButton>
  ) : null;
};

export default DeleteButton;
