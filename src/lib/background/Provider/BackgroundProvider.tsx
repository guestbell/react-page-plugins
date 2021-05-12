import { ImageLoaded, RGBColor } from '@react-page/editor';
import * as React from 'react';
import { BackgroundApi } from '../types/api';
import { BackgroundProps } from '../types/component';
import { ModeEnum } from '../types/ModeEnum';
import { BackgroundPreviewState } from '../types/previewState';

const BackgroundContext = React.createContext<
  BackgroundApi & BackgroundPreviewState
>(null);

export const BackgroundProvider: React.FC<BackgroundProps> = ({
  children,
  onChange,
  data = {},
  defaultHasPadding,
}) => {
  const [state, setState] = React.useState<BackgroundPreviewState>({});
  const { darkenPreview, lightenPreview } = state;
  const { hasPadding } = data;
  const handleChangeDarken = React.useCallback(() => {
    onChange({ darken: darkenPreview });
    setState(previousState => ({ ...previousState, darkenPreview: undefined }));
  }, [darkenPreview, onChange]);

  const handleChangeDarkenPreview = React.useCallback((value: number) => {
    setState(previousState => ({ ...previousState, darkenPreview: value }));
  }, []);

  const handleChangeLighten = React.useCallback(() => {
    onChange({ lighten: lightenPreview });
    setState(previousState => ({
      ...previousState,
      lightenPreview: undefined,
    }));
  }, [onChange, lightenPreview]);

  const handleChangeLightenPreview = React.useCallback((value: number) => {
    setState(previousState => ({ ...previousState, lightenPreview: value }));
  }, []);

  const handleChangeHasPadding = React.useCallback(() => {
    onChange({
      hasPadding: hasPadding === undefined ? !defaultHasPadding : !hasPadding,
    });
  }, [onChange, hasPadding, defaultHasPadding]);

  const handleChangeBackgroundColorPreview = React.useCallback(
    (e: RGBColor) =>
      setState(previousState => ({
        ...previousState,
        backgroundColorPreview: e,
      })),
    []
  );

  const handleChangeGradientDegPreview = React.useCallback(
    (gradientDegPreview: number, gradientDegPreviewIndex?: number) =>
      setState(previousState => ({
        ...previousState,
        gradientDegPreview,
        gradientDegPreviewIndex,
      })),
    []
  );

  const handleChangeGradientOpacityPreview = React.useCallback(
    (gradientOpacityPreview: number, gradientOpacityPreviewIndex?: number) =>
      setState(previousState => ({
        ...previousState,
        gradientOpacityPreview,
        gradientOpacityPreviewIndex,
      })),
    []
  );

  const handleChangeGradientColorPreview = React.useCallback(
    (
      gradientColorPreview: RGBColor,
      gradientColorPreviewIndex?: number,
      gradientColorPreviewColorIndex?: number
    ) =>
      setState(previousState => ({
        ...previousState,
        gradientColorPreview,
        gradientColorPreviewIndex,
        gradientColorPreviewColorIndex,
      })),
    []
  );

  const handleImageLoaded = React.useCallback(
    (imagePreview: ImageLoaded) =>
      setState(previousState => ({
        ...previousState,
        imagePreview,
      })),
    []
  );

  const handleImageUploaded = React.useCallback(
    () =>
      setState(previousState => ({
        ...previousState,
        imagePreview: undefined,
      })),
    []
  );

  const handleChangeModeSwitch = React.useCallback(
    (mode: ModeEnum, modeFlag: ModeEnum) => () => {
      modeFlag ^= mode;
      onChange({ modeFlag });
    },
    [onChange]
  );

  const value = React.useMemo<BackgroundApi & BackgroundPreviewState>(
    () => ({
      ...state,
      handleChangeModeSwitch,
      handleImageUploaded,
      handleImageLoaded,
      handleChangeGradientColorPreview,
      handleChangeGradientOpacityPreview,
      handleChangeGradientDegPreview,
      handleChangeBackgroundColorPreview,
      handleChangeHasPadding,
      handleChangeLightenPreview,
      handleChangeLighten,
      handleChangeDarkenPreview,
      handleChangeDarken,
    }),
    [
      state,
      handleChangeModeSwitch,
      handleImageUploaded,
      handleImageLoaded,
      handleChangeGradientColorPreview,
      handleChangeGradientOpacityPreview,
      handleChangeGradientDegPreview,
      handleChangeBackgroundColorPreview,
      handleChangeHasPadding,
      handleChangeLightenPreview,
      handleChangeLighten,
      handleChangeDarkenPreview,
      handleChangeDarken,
    ]
  );

  return (
    <BackgroundContext.Provider value={value}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackgroundApi: () => BackgroundApi = () => {
  const {
    handleChangeModeSwitch,
    handleImageUploaded,
    handleImageLoaded,
    handleChangeGradientColorPreview,
    handleChangeGradientOpacityPreview,
    handleChangeGradientDegPreview,
    handleChangeBackgroundColorPreview,
    handleChangeHasPadding,
    handleChangeLightenPreview,
    handleChangeLighten,
    handleChangeDarkenPreview,
    handleChangeDarken,
  } = React.useContext(BackgroundContext) ?? {};
  return {
    handleChangeModeSwitch,
    handleImageUploaded,
    handleImageLoaded,
    handleChangeGradientColorPreview,
    handleChangeGradientOpacityPreview,
    handleChangeGradientDegPreview,
    handleChangeBackgroundColorPreview,
    handleChangeHasPadding,
    handleChangeLightenPreview,
    handleChangeLighten,
    handleChangeDarkenPreview,
    handleChangeDarken,
  };
};
export const useBackgroundPreviewState: () => BackgroundPreviewState = () => {
  const {
    darkenPreview,
    backgroundColorPreview,
    gradientColorPreview,
    gradientColorPreviewColorIndex,
    gradientColorPreviewIndex,
    gradientDegPreview,
    gradientDegPreviewIndex,
    gradientOpacityPreview,
    gradientOpacityPreviewIndex,
    lightenPreview,
  } = React.useContext(BackgroundContext) ?? {};
  return {
    darkenPreview,
    backgroundColorPreview,
    gradientColorPreview,
    gradientColorPreviewColorIndex,
    gradientColorPreviewIndex,
    gradientDegPreview,
    gradientDegPreviewIndex,
    gradientOpacityPreview,
    gradientOpacityPreviewIndex,
    lightenPreview,
  };
};
