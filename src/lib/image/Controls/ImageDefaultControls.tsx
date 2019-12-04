import * as React from 'react';

import { ImageControlsProps as ImageControlsCustomProps } from '../types/controls';
import BottomToolbar from '../../common/components/bottomToolbar/BottomToolbar';
import ImageOrSrc from '../../common/components/imageOrSrc/ImageOrSrc';

type ImageControlsProps = ImageControlsCustomProps;

const ImageDefaultControls: React.FC<ImageControlsProps> = props => {
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
            <ImageOrSrc
              onChange={onChange}
              state={props.state}
              UploadImageField={props.UploadImageField}
            />
          </div>
        </BottomToolbar>
      )}
    </div>
  );
};

export default ImageDefaultControls;
