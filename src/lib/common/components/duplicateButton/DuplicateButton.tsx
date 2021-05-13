import { IconButton } from '@material-ui/core';
import Icon from '@material-ui/icons/FileCopy';
import React from 'react';
import { useDuplicateCell } from '@react-page/editor';

export const DuplicateButton: React.FC<{ nodeId: string }> = React.memo(
  ({ nodeId }) => {
    const duplicateCell = useDuplicateCell(nodeId);
    return (
      <IconButton
        onClick={duplicateCell}
        aria-label="delete"
        color="default"
        className="bottomToolbar__duplicateButton"
      >
        <Icon />
      </IconButton>
    );
  }
);
