import * as React from 'react';

import { ImageControlsProps as ImageControlsCustomProps } from '../types/controls';
import ImageOrSrc from '../../common/components/imageOrSrc/ImageOrSrc';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { ImageConstraintMode } from '../types/state';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

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
    data: { constraintMode = ImageConstraintMode.FullWidth, href = '' },
  } = props;
  const onConstraintModeChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) =>
      onChange({ constraintMode: Number(e.target.value) }),
    [onChange]
  );
  const onHrefChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      onChange({ href: e.target.value }),
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
              value={constraintMode}
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
          </FormControl>
        </>
      )}
    </div>
  );
};

export default ImageDefaultControls;
