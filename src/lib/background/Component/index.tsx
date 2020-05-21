import * as React from 'react';

import { BackgroundProps } from '../types/component';
import { RGBColor } from '@react-page/ui/lib/ColorPicker/types';
import { ImageLoaded } from '@react-page/ui/lib/ImageUpload/types';
import { ModeEnum } from '../types/ModeEnum';
import { BackgroundApi } from '../types/api';

export type BackgroundState = {
  backgroundColorPreview?: RGBColor;
  gradientDegPreview?: number;
  gradientDegPreviewIndex?: number;
  gradientOpacityPreview?: number;
  gradientOpacityPreviewIndex?: number;
  gradientColorPreview?: RGBColor;
  gradientColorPreviewIndex?: number;
  gradientColorPreviewColorIndex?: number;
  darkenPreview?: number;
  lightenPreview?: number;
  imagePreview?: ImageLoaded;
};

class BackgroundComponent
  extends React.Component<BackgroundProps, BackgroundState>
  implements BackgroundApi {
  constructor(props: BackgroundProps) {
    super(props);
    this.state = {};
  }

  handleChangeDarken = () => {
    this.props.onChange({ darken: this.state.darkenPreview });
    this.setState({ darkenPreview: undefined });
  };

  handleChangeDarkenPreview = (value: number) => {
    this.setState({ darkenPreview: value });
  };

  handleChangeLighten = () => {
    this.props.onChange({ lighten: this.state.lightenPreview });
    this.setState({ lightenPreview: undefined });
  };

  handleChangeLightenPreview = (value: number) => {
    this.setState({ lightenPreview: value });
  };

  handleChangeHasPadding = () => {
    this.props.onChange({
      hasPadding:
        this.props.state.hasPadding === undefined
          ? !this.props.defaultHasPadding
          : !this.props.state.hasPadding,
    });
  };

  handleChangeBackgroundColorPreview = (e: RGBColor) =>
    this.setState({ backgroundColorPreview: e });

  handleChangeGradientDegPreview = (
    gradientDegPreview: number,
    gradientDegPreviewIndex?: number
  ) => this.setState({ gradientDegPreview, gradientDegPreviewIndex });

  handleChangeGradientOpacityPreview = (
    gradientOpacityPreview: number,
    gradientOpacityPreviewIndex?: number
  ) => this.setState({ gradientOpacityPreview, gradientOpacityPreviewIndex });

  handleChangeGradientColorPreview = (
    gradientColorPreview: RGBColor,
    gradientColorPreviewIndex?: number,
    gradientColorPreviewColorIndex?: number
  ) =>
    this.setState({
      gradientColorPreview,
      gradientColorPreviewIndex,
      gradientColorPreviewColorIndex,
    });

  handleImageLoaded = (imagePreview: ImageLoaded) =>
    this.setState({ imagePreview });

  handleImageUploaded = () => this.setState({ imagePreview: undefined });

  handleChangeModeSwitch = (mode: ModeEnum, modeFlag: ModeEnum) => () => {
    modeFlag ^= mode;
    this.props.onChange({ modeFlag });
  };

  render() {
    const { Controls, Renderer, readOnly } = this.props;
    return (
      <>
        {!readOnly ? (
          <Controls
            {...this.props}
            handleChangeDarken={this.handleChangeDarken}
            handleChangeDarkenPreview={this.handleChangeDarkenPreview}
            handleChangeLighten={this.handleChangeLighten}
            handleChangeLightenPreview={this.handleChangeLightenPreview}
            handleChangeHasPadding={this.handleChangeHasPadding}
            handleChangeModeSwitch={this.handleChangeModeSwitch}
            handleChangeBackgroundColorPreview={
              this.handleChangeBackgroundColorPreview
            }
            handleChangeGradientDegPreview={this.handleChangeGradientDegPreview}
            handleChangeGradientOpacityPreview={
              this.handleChangeGradientOpacityPreview
            }
            handleChangeGradientColorPreview={
              this.handleChangeGradientColorPreview
            }
            handleImageLoaded={this.handleImageLoaded}
            handleImageUploaded={this.handleImageUploaded}
            {...this.state}
          />
        ) : null}
        <Renderer
          {...this.props}
          lightenPreview={this.state.lightenPreview}
          darkenPreview={this.state.darkenPreview}
          gradientColorPreview={this.state.gradientColorPreview}
          backgroundColorPreview={this.state.backgroundColorPreview}
          gradientColorPreviewColorIndex={
            this.state.gradientColorPreviewColorIndex
          }
          gradientColorPreviewIndex={this.state.gradientColorPreviewIndex}
          gradientDegPreview={this.state.gradientDegPreview}
          gradientDegPreviewIndex={this.state.gradientDegPreviewIndex}
          gradientOpacityPreview={this.state.gradientOpacityPreview}
          gradientOpacityPreviewIndex={this.state.gradientOpacityPreviewIndex}
        />
      </>
    );
  }
}

export default BackgroundComponent;
