import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ColorComponent from './sub/Color';
import LinearGradientComponent from './sub/LinearGradient';
import ImageComponent from './sub/Image';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ImageIcon from '@material-ui/icons/Landscape';
import ColorIcon from '@material-ui/icons/ColorLens';
import GradientIcon from '@material-ui/icons/Gradient';
import Typography from '@material-ui/core/Typography';
import { ModeEnum } from '../types/ModeEnum';
import { BackgroundControlsProps } from '../types/controls';
import Slider from '@material-ui/core/Slider';
import BottomToolbar from '../../common/components/bottomToolbar/BottomToolbar';

export interface BackgroundControlsState {
  mode: ModeEnum;
}

class BackgroundControls extends React.Component<
  BackgroundControlsProps,
  BackgroundControlsState
> {
  constructor(props: BackgroundControlsProps) {
    super(props);
    this.state = {
      mode: props.defaultMode,
    };
  }

  public render() {
    const {
      focused,
      remove,
      state: {
        hasPadding = this.props.defaultHasPadding,
        modeFlag = this.props.defaultModeFlag,
        darken = this.props.defaultDarken,
        lighten = this.props.defaultLighten,
      },
    } = this.props;
    let darkenFinal =
      this.props.darkenPreview !== undefined
        ? this.props.darkenPreview
        : darken;
    let lightenFinal =
      this.props.lightenPreview !== undefined
        ? this.props.lightenPreview
        : lighten;
    return (
      <div className="backgroundControls">
        <BottomToolbar
          open={focused}
          title={this.props.translations.pluginName}
          icon={this.props.IconComponent}
          onDelete={remove}
          {...this.props}
        >
          <Tabs
            value={this.state.mode}
            onChange={this.handleChangeMode}
            centered={true}
          >
            {(this.props.enabledModes & ModeEnum.IMAGE_MODE_FLAG) > 0 && (
              <Tab
                icon={
                  <ImageIcon
                    color={
                      (modeFlag & ModeEnum.IMAGE_MODE_FLAG) > 0
                        ? 'primary'
                        : 'action'
                    }
                  />
                }
                label="Image"
                value={ModeEnum.IMAGE_MODE_FLAG}
              />
            )}
            {(this.props.enabledModes & ModeEnum.COLOR_MODE_FLAG) > 0 && (
              <Tab
                icon={
                  <ColorIcon
                    color={
                      (modeFlag & ModeEnum.COLOR_MODE_FLAG) > 0
                        ? 'primary'
                        : 'action'
                    }
                  />
                }
                label="Color"
                value={ModeEnum.COLOR_MODE_FLAG}
              />
            )}
            {(this.props.enabledModes & ModeEnum.GRADIENT_MODE_FLAG) > 0 && (
              <Tab
                icon={
                  <GradientIcon
                    color={
                      (modeFlag & ModeEnum.GRADIENT_MODE_FLAG) > 0
                        ? 'primary'
                        : 'action'
                    }
                  />
                }
                label="Gradient"
                value={ModeEnum.GRADIENT_MODE_FLAG}
              />
            )}
          </Tabs>
          {this.renderUI()}
          <br />
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '1', marginRight: '8px' }}>
              <Typography variant="body1" id="linear-gradient-darken-label">
                Darken ({(darkenFinal * 100).toFixed(0)}
                %)
              </Typography>
              <Slider
                aria-labelledby="linear-gradient-darken-label"
                value={darkenFinal}
                onChange={(e, value) =>
                  this.props.handleChangeDarkenPreview(
                    value instanceof Array ? value[0] : value
                  )
                }
                onChangeCommitted={this.props.handleChangeDarken}
                step={0.01}
                min={0}
                max={1}
              />
            </div>
            <div style={{ flex: '1', marginLeft: '8px' }}>
              <Typography variant="body1" id="linear-gradient-lighten-label">
                Lighten ({(lightenFinal * 100).toFixed(0)}
                %)
              </Typography>
              <Slider
                aria-labelledby="linear-gradient-lighten-label"
                value={lightenFinal}
                onChange={(e, value) =>
                  this.props.handleChangeLightenPreview(
                    value instanceof Array ? value[0] : value
                  )
                }
                onChangeCommitted={this.props.handleChangeLighten}
                step={0.01}
                min={0}
                max={1}
              />
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <FormControlLabel
              control={
                <Switch
                  onChange={this.props.handleChangeHasPadding}
                  checked={hasPadding}
                />
              }
              label="Use padding"
            />
          </div>
        </BottomToolbar>
      </div>
    );
  }

  renderModeSwitch = () => {
    const {
      state: { modeFlag = this.props.defaultModeFlag },
    } = this.props;
    let label = 'ON/OFF';
    switch (this.state.mode) {
      case ModeEnum.COLOR_MODE_FLAG:
        // label = 'Use color'
        break;
      case ModeEnum.IMAGE_MODE_FLAG:
        // label = 'Use image'
        break;
      case ModeEnum.GRADIENT_MODE_FLAG:
        // label = 'Use gradient'
        break;
      default:
        label = 'Unknown mode';
        break;
    }
    return (
      <>
        <FormControlLabel
          control={
            <Switch
              onChange={this.props.handleChangeModeSwitch(
                this.state.mode,
                modeFlag
              )}
              checked={Boolean(modeFlag & this.state.mode)}
            />
          }
          label={label}
        />
      </>
    );
  };

  renderUI = () => {
    switch (this.state.mode) {
      case ModeEnum.COLOR_MODE_FLAG:
        return (
          <React.Fragment>
            {this.renderModeSwitch()}
            <ColorComponent
              {...this.props}
              ensureModeOn={this.ensureModeOn(ModeEnum.COLOR_MODE_FLAG)}
              onChangeBackgroundColorPreview={
                this.props.handleChangeBackgroundColorPreview
              }
              backgroundColorPreview={this.props.backgroundColorPreview}
            />
          </React.Fragment>
        );
      case ModeEnum.GRADIENT_MODE_FLAG:
        return (
          <React.Fragment>
            {this.renderModeSwitch()}
            <LinearGradientComponent
              {...this.props}
              ensureModeOn={this.ensureModeOn(ModeEnum.GRADIENT_MODE_FLAG)}
              gradientDegPreview={this.props.gradientDegPreview}
              gradientDegPreviewIndex={this.props.gradientDegPreviewIndex}
              gradientOpacityPreview={this.props.gradientOpacityPreview}
              gradientOpacityPreviewIndex={
                this.props.gradientOpacityPreviewIndex
              }
              gradientColorPreview={this.props.gradientColorPreview}
              gradientColorPreviewIndex={this.props.gradientColorPreviewIndex}
              gradientColorPreviewColorIndex={
                this.props.gradientColorPreviewColorIndex
              }
              onChangeGradientDegPreview={
                this.props.handleChangeGradientDegPreview
              }
              onChangeGradientOpacityPreview={
                this.props.handleChangeGradientOpacityPreview
              }
              onChangeGradientColorPreview={
                this.props.handleChangeGradientColorPreview
              }
            />
          </React.Fragment>
        );
      case ModeEnum.IMAGE_MODE_FLAG:
      default:
        return (
          <React.Fragment>
            {this.renderModeSwitch()}
            <ImageComponent
              {...this.props}
              ensureModeOn={this.ensureModeOn(ModeEnum.IMAGE_MODE_FLAG)}
            />
          </React.Fragment>
        );
    }
  };

  ensureModeOn = (mode: ModeEnum) => () => {
    const {
      state: { modeFlag = this.props.defaultModeFlag },
    } = this.props;
    if ((modeFlag & mode) === 0) {
      this.props.handleChangeModeSwitch(mode, modeFlag)();
    }
  };

  handleChangeMode = (e: React.ChangeEvent, mode: number) =>
    this.setState({ mode });
}

export default BackgroundControls;
