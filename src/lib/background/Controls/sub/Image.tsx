import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { BackgroundProps } from '../../types/component';
import ImageOrSrc, {
  ImageOrSrcOryState,
} from '../../../common/components/imageOrSrc/ImageOrSrc';

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
        this.props.data.isParallax === undefined
          ? false
          : !this.props.data.isParallax,
    });
  };

  imageOrSrcOnChange = (state: ImageOrSrcOryState) => {
    this.props.onChange({
      bgImage: state.image,
      bgImageId: state.imageId,
      bgSrc: state.src,
    });
  };

  render() {
    const {
      data: { isParallax = this.props.defaultIsParallax },
    } = this.props;
    return (
      <div>
        <br />
        <div className="w-100">
          <ImageOrSrc
            onChange={this.imageOrSrcOnChange}
            state={{
              imageId: this.props.data.bgImageId,
              image: this.props.data.bgImage,
              src: this.props.data.bgSrc,
            }}
            UploadImageField={this.props.UploadImageField}
            hideSrcSetField={true}
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
