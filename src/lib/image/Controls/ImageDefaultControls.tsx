import * as React from 'react';

import { ImageControlsProps as ImageControlsCustomProps } from '../types/controls';
import BottomToolbar from '../../common/components/bottomToolbar/BottomToolbar';

type ImageControlsProps = ImageControlsCustomProps;

const ImageDefaultControls: React.SFC<ImageControlsProps> = props => {
  const { Renderer, onChange, readOnly, focused, remove } = props;
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
          <div className="w-100 fg--light">
            <props.UploadImageField
              label="Choose image"
              className="d-flex"
              onChange={(imageId, image) => onChange({ imageId, image })}
              imageId={props.state.imageId}
              existingImage={props.state.image}
              chooseImageButtonProps={{
                className: 'ory-prevent-blur',
              }}
              uploadImageButtonProps={{
                className: 'ory-prevent-blur',
              }}
            />
          </div>
        </BottomToolbar>
      )}
    </div>
  );
};

export default ImageDefaultControls;
