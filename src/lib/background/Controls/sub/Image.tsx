import * as React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
        this.props.state.isParallax === undefined
          ? false
          : !this.props.state.isParallax,
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
      state: { isParallax = true },
    } = this.props;
    return (
      <div>
        <br />
        <div className="w-100 fg--light">
          <ImageOrSrc
            onChange={this.imageOrSrcOnChange}
            state={{
              imageId: this.props.state.bgImageId,
              image: this.props.state.bgImage,
              src: this.props.state.bgSrc,
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
