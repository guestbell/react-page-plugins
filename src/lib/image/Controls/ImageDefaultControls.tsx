import * as React from 'react';

import { BottomToolbar } from '@react-page/ui';
import { ImageControlsProps as ImageControlsCustomProps } from '../types/controls';
import Checkbox from 'guestbell-forms/build/components/checkbox/Checkbox';
import Text from 'guestbell-forms/build/components/text/Text';

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
          <Text
            label="Link (e.g. http://example.com)"
            value={props.state.href}
            onChange={e => onChange({ href: e.target.value })}
          />
          <Checkbox
            label="Open in new window"
            checked={props.state.target === '_blank'}
            onChecked={e =>
              onChange({ target: e.target.checked ? '_blank' : '' })
            }
          />
        </BottomToolbar>
      )}
    </div>
  );
};

export default ImageDefaultControls;
