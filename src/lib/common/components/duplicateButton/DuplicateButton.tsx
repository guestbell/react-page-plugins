import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/icons/FileCopy';
import { Actions, connect, Selectors } from '@react-page/core';
import React from 'react';
import { createStructuredSelector } from 'reselect';

const DuplicateButton = ({ id, node, duplicateCell }) => {
  return node ? (
    <IconButton
      className="bottomToolbar__duplicateButton"
      onClick={() => duplicateCell(node, node)}
      aria-label="delete"
      color="default"
      title="Duplicate"
    >
      <Icon />
    </IconButton>
  ) : null;
};

const mapStateToProps = createStructuredSelector({
  node: Selectors.Editable.node,
});

const mapDispatchToProps = {
  duplicateCell: Actions.Cell.duplicateCell,
};

export default connect(mapStateToProps, mapDispatchToProps)(DuplicateButton);
