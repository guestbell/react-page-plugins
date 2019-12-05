import * as React from 'react';

import { ImageControlsProps as ImageControlsCustomProps } from '../types/controls';
import BottomToolbar from '../../common/components/bottomToolbar/BottomToolbar';
import ImageOrSrc from '../../common/components/imageOrSrc/ImageOrSrc';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { ImageConstraintMode } from '../types/state';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

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
    Renderer,
    onChange,
    readOnly,
    focused,
    remove,
    state: { constraintMode = ImageConstraintMode.FullWidth },
  } = props;
  const onConstraintModeChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange({ constraintMode: Number(e.target.value) });
  return (
    <div className="imageControls ory-prevent-blur">
      <Renderer {...props} />
      {!readOnly && focused && (
        <BottomToolbar
          icon={props.IconComponent}
          open={props.focused}
          title={props.translations.pluginName}
          onDelete={remove}
          {...props}
          theme={props.theme}
        >
          <ImageOrSrc
            onChange={onChange}
            state={props.state}
            UploadImageField={props.UploadImageField}
          />
          <FormControl>
            <InputLabel>Size mode</InputLabel>
            <Select value={constraintMode} onChange={onConstraintModeChange}>
              {allModes.map((item, key) => (
                <MenuItem key={key} value={item}>
                  {modeNames[item]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </BottomToolbar>
      )}
    </div>
  );
};

export default ImageDefaultControls;
