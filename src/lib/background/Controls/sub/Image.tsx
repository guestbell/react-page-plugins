import * as React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { BackgroundProps } from '../../types/component';

export interface ImageComponentProps {
  ensureModeOn: () => void;
}

type CustomProps = BackgroundProps & ImageComponentProps;

export type BgImageComponentProps = CustomProps;

class ImageComponent extends React.Component<BgImageComponentProps> {
  handleChangeIsParallax = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.ensureModeOn();
    this.props.onChange({
      isParallax:
        this.props.state.isParallax === undefined
          ? false
          : !this.props.state.isParallax,
    });
  };

  render() {
    const {
      state: { isParallax = true, bgImageId, bgImage },
    } = this.props;
    return (
      <div>
        <div className="w-100 fg--light">
          <this.props.UploadImageField
            className="d-flex"
            onChange={(bgImgIdChanged, bgImageChange) =>
              this.props.onChange({
                bgImageId: bgImgIdChanged,
                bgImage: bgImageChange,
              })
            }
            imageId={bgImageId}
            existingImage={bgImage}
            chooseImageButtonProps={{
              className: 'ory-prevent-blur',
            }}
            uploadImageButtonProps={{
              className: 'ory-prevent-blur',
            }}
          />
        </div>
        <br />
        <div style={{ display: 'flex' }}>
          <FormControlLabel
            control={
              <Switch
                onChange={this.handleChangeIsParallax}
                checked={isParallax}
              />
            }
            label="Is parallax"
          />
        </div>
      </div>
    );
  }
}

export default ImageComponent;
