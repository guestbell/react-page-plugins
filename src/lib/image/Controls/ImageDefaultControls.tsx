import * as React from 'react';

import { ImageControlsProps as ImageControlsCustomProps } from '../types/controls';
import ImageOrSrc from '../../common/components/imageOrSrc/ImageOrSrc';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ImageConstraintMode } from '../types/state';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

type ImageControlsProps = ImageControlsCustomProps;

const allModes: ImageConstraintMode[] = Object.keys(ImageConstraintMode)
  .filter(k => typeof ImageConstraintMode[k] === 'number')
  .map(item => ImageConstraintMode[item]);

const modeNames = {
  [ImageConstraintMode.FullWidth]: 'Full width',
  [ImageConstraintMode.SmallHeight]: 'Small height',
  [ImageConstraintMode.MediumHeight]: 'Medium height',
  [ImageConstraintMode.BigHeight]: 'Big height',
};

const ImageDefaultControls: React.FC<ImageControlsProps> = props => {
  const {
    onChange,
    readOnly,
    focused,
    data: {
      constraintMode = ImageConstraintMode.FullWidth,
      href = '',
      hasMargin = true,
    },
  } = props;
  const onConstraintModeChange = React.useCallback(
    (e: SelectChangeEvent) =>
      onChange({ constraintMode: Number(e.target.value) }),
    [onChange]
  );
  const onHrefChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      onChange({ href: e.target.value }),
    [onChange]
  );
  const handleChangeHasPadding = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      onChange({ hasMargin: e.target.checked }),
    [onChange]
  );
  return (
    <div className="imageControls ory-prevent-blur">
      {!readOnly && focused && (
        <>
          <ImageOrSrc
            onChange={onChange}
            state={props.data}
            UploadImageField={props.UploadImageField}
          />
          <FormControl>
            <InputLabel>Size mode</InputLabel>
            <Select
              className="mb-1"
              value={constraintMode?.toString()}
              onChange={onConstraintModeChange}
            >
              {allModes.map((item, key) => (
                <MenuItem key={key} value={item}>
                  {modeNames[item]}
                </MenuItem>
              ))}
            </Select>
            <TextField
              className="mb-1"
              label="Link url"
              onChange={onHrefChange}
              value={href}
            />
            <FormControlLabel
              control={
                <Switch onChange={handleChangeHasPadding} checked={hasMargin} />
              }
              label="Use margin"
            />
          </FormControl>
        </>
      )}
    </div>
  );
};

export default ImageDefaultControls;
