import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';

export interface DeleteButtonProps {
  onDelete: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = props => {
  const { onDelete } = props;
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
