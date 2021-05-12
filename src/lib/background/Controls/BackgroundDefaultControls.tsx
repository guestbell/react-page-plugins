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
import {
  useBackgroundApi,
  useBackgroundPreviewState,
} from '../Provider/BackgroundProvider';

export interface BackgroundControlsState {
  mode: ModeEnum;
}

const containerStyles: React.CSSProperties = {
  paddingLeft: 8,
  paddingRight: 8,
};

const BackgroundControls: React.FC<BackgroundControlsProps> = props => {
  const [mode, setMode] = React.useState(props.defaultMode);
  const {
    data: {
      hasPadding = props.defaultHasPadding,
      modeFlag = props.defaultModeFlag,
      darken = props.defaultDarken,
      lighten = props.defaultLighten,
    },
  } = props;
  const previewState = useBackgroundPreviewState();
  const {
    handleChangeBackgroundColorPreview,
    handleChangeDarken,
    handleChangeDarkenPreview,
    handleChangeGradientColorPreview,
    handleChangeGradientDegPreview,
    handleChangeGradientOpacityPreview,
    handleChangeHasPadding,
    handleChangeLighten,
    handleChangeLightenPreview,
    handleChangeModeSwitch,
  } = useBackgroundApi();
  let darkenFinal =
    previewState.darkenPreview !== undefined
      ? previewState.darkenPreview
      : darken;
  let lightenFinal =
    previewState.lightenPreview !== undefined
      ? previewState.lightenPreview
      : lighten;

  const ModeSwitch = React.useCallback(() => {
    let label = 'ON/OFF';
    switch (mode) {
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
              onChange={handleChangeModeSwitch(mode, modeFlag)}
              checked={Boolean(modeFlag & mode)}
            />
          }
          label={label}
        />
      </>
    );
  }, [modeFlag, mode, handleChangeModeSwitch]);

  const ensureModeOn = React.useCallback(
    (mode: ModeEnum) => () => {
      if ((modeFlag & mode) === 0) {
        handleChangeModeSwitch(mode, modeFlag)();
      }
    },
    [handleChangeModeSwitch, modeFlag]
  );

  const renderUI = () => {
    switch (mode) {
      case ModeEnum.COLOR_MODE_FLAG:
        return (
          <React.Fragment>
            <ColorComponent
              {...props}
              ensureModeOn={ensureModeOn(ModeEnum.COLOR_MODE_FLAG)}
              onChangeBackgroundColorPreview={
                handleChangeBackgroundColorPreview
              }
              backgroundColorPreview={previewState.backgroundColorPreview}
            />
          </React.Fragment>
        );
      case ModeEnum.GRADIENT_MODE_FLAG:
        return (
          <React.Fragment>
            <LinearGradientComponent
              {...props}
              ensureModeOn={ensureModeOn(ModeEnum.GRADIENT_MODE_FLAG)}
              gradientDegPreview={previewState.gradientDegPreview}
              gradientDegPreviewIndex={previewState.gradientDegPreviewIndex}
              gradientOpacityPreview={previewState.gradientOpacityPreview}
              gradientOpacityPreviewIndex={
                previewState.gradientOpacityPreviewIndex
              }
              gradientColorPreview={previewState.gradientColorPreview}
              gradientColorPreviewIndex={previewState.gradientColorPreviewIndex}
              gradientColorPreviewColorIndex={
                previewState.gradientColorPreviewColorIndex
              }
              onChangeGradientDegPreview={handleChangeGradientDegPreview}
              onChangeGradientOpacityPreview={
                handleChangeGradientOpacityPreview
              }
              onChangeGradientColorPreview={handleChangeGradientColorPreview}
            />
          </React.Fragment>
        );
      case ModeEnum.IMAGE_MODE_FLAG:
      default:
        return (
          <React.Fragment>
            <ImageComponent
              {...props}
              ensureModeOn={ensureModeOn(ModeEnum.IMAGE_MODE_FLAG)}
            />
          </React.Fragment>
        );
    }
  };

  const handleChangeMode = React.useCallback(
    (e: React.ChangeEvent, mode: number) => setMode(mode),
    []
  );
  return (
    <div className="backgroundControls" style={containerStyles}>
      <Tabs value={mode} onChange={handleChangeMode} centered={true}>
        {(props.enabledModes & ModeEnum.IMAGE_MODE_FLAG) > 0 && (
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
        {(props.enabledModes & ModeEnum.COLOR_MODE_FLAG) > 0 && (
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
        {(props.enabledModes & ModeEnum.GRADIENT_MODE_FLAG) > 0 && (
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
      <div className="py-3">{renderUI()}</div>
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
              handleChangeDarkenPreview(
                value instanceof Array ? value[0] : value
              )
            }
            onChangeCommitted={handleChangeDarken}
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
              handleChangeLightenPreview(
                value instanceof Array ? value[0] : value
              )
            }
            onChangeCommitted={handleChangeLighten}
            step={0.01}
            min={0}
            max={1}
          />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <ModeSwitch />
        <FormControlLabel
          control={
            <Switch onChange={handleChangeHasPadding} checked={hasPadding} />
          }
          label="Use padding"
        />
      </div>
    </div>
  );
};

export default BackgroundControls;
