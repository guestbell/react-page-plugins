import { IconButton } from '@mui/material';
import Icon from '@mui/icons-material/FileCopy';
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
        size="large"
      >
        <Icon />
      </IconButton>
    );
  }
);
