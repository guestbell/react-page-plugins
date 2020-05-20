import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Actions, connect, Selectors } from '@react-page/core';
import React from 'react';
import { createStructuredSelector } from 'reselect';

const DraftSwitch = ({ id, node, setDraft }) => {
  return node ? (
    <FormControlLabel
      style={{ marginRight: 0 }}
      labelPlacement="start"
      control={
        <Switch
          color="primary"
          checked={Boolean(node.isDraft)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDraft(id, e.target.checked)
          }
        />
      }
      label="Draft"
    />
  ) : null;
};

const mapStateToProps = createStructuredSelector({
  node: Selectors.Editable.node,
});

const mapDispatchToProps = {
  setDraft: Actions.Cell.updateCellIsDraft,
};

export default connect(mapStateToProps, mapDispatchToProps)(DraftSwitch);
