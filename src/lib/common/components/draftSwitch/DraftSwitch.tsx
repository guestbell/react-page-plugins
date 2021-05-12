import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react';
import { useCellProps, useSetDraft } from '@react-page/editor';

export const DraftSwitch = ({
  nodeId,
  lang,
}: {
  nodeId: string;
  lang?: string;
}) => {
  const cell = useCellProps(nodeId, c => ({
    isDraft: c.isDraft,
  }));
  const setDraft = useSetDraft(nodeId);
  return cell ? (
    <FormControlLabel
      className="bottomToolbar__draftSwitch"
      style={{ marginRight: 0 }}
      labelPlacement="start"
      control={
        <Switch
          color="primary"
          checked={Boolean(cell.isDraft)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDraft(e.target.checked, undefined)
          }
        />
      }
      label="Draft"
    />
  ) : null;
};
