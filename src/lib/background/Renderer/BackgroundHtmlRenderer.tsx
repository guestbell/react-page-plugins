import { colorToString } from '@react-page/editor';
import * as React from 'react';
import { ModeEnum } from '../types/ModeEnum';
import { BackgroundRendererProps } from '../types/renderer';
import PaddingComponent from '../../common/utils/PaddingComponent';
import { useBackgroundPreviewState } from '../Provider/BackgroundProvider';
import { BackgroundPreviewState } from '../types/previewState';
import { BackgroundProps } from '../types/component';

const getStyles = (
  props: BackgroundProps,
  previewState: BackgroundPreviewState
) => {
  const {
    data: {
      bgImage,
      modeFlag = props.defaultModeFlag,
      isParallax = props.defaultIsParallax,
      backgroundColor = props.defaultBackgroundColor,
      gradients = [],
    },
  } = props;
  let styles: React.CSSProperties = {};
  if (modeFlag & ModeEnum.GRADIENT_MODE_FLAG) {
    const usedGradients = gradients.filter(g => g.colors && g.colors.length);
    const usedGradientsString = usedGradients
      .map((g, i) => {
        const firstColor = g.colors[0].color;
        const firstColorStr = colorToString(firstColor);
        const deg =
          i === previewState.gradientDegPreviewIndex &&
          previewState.gradientDegPreview !== undefined
            ? previewState.gradientDegPreview
            : g.deg;
        const opacity =
          i === previewState.gradientOpacityPreviewIndex &&
          previewState.gradientOpacityPreview !== undefined
            ? previewState.gradientOpacityPreview
            : g.opacity;
        return (
          'linear-gradient(' +
          deg +
          'deg, ' +
          (g.colors.length !== 1
            ? g.colors
                .map((c, cpIndex) => {
                  const color =
                    i === previewState.gradientColorPreviewIndex &&
                    cpIndex === previewState.gradientColorPreviewColorIndex &&
                    previewState.gradientColorPreview !== undefined
                      ? previewState.gradientColorPreview
                      : c.color;
                  const colorWithOpacity = {
                    ...color,
                    a: color.a !== undefined ? color.a * opacity : opacity,
                  };
                  return colorToString(colorWithOpacity);
                })
                .join(', ')
            : firstColorStr + ', ' + firstColorStr) +
          ')'
        );
      })
      .join(', ');
    if (usedGradientsString !== '') {
      styles = { ...styles, background: usedGradientsString };
    }
  }
  if (modeFlag & ModeEnum.COLOR_MODE_FLAG) {
    const colorStr = colorToString(
      previewState.backgroundColorPreview
        ? previewState.backgroundColorPreview
        : backgroundColor
    );
    const modeStr = `linear-gradient(${colorStr}, ${colorStr})`;
    styles = {
      ...styles,
      background: styles.background
        ? styles.background + ', ' + modeStr
        : modeStr,
    };
  }
  if (modeFlag & ModeEnum.IMAGE_MODE_FLAG) {
    const backgroundFinal = bgImage ? bgImage.src : props.data.bgSrc;
    const modeStr =
      `url('${backgroundFinal}') center / cover no-repeat` +
      (isParallax ? ' fixed' : '');
    styles = {
      ...styles,
      background: styles.background
        ? styles.background + ', ' + modeStr
        : modeStr,
    };
  }
  return styles;
};

const BackgroundHtmlRenderer: React.FC<BackgroundRendererProps> = props => {
  const {
    children,
    data: {
      darken = props.defaultDarken,
      lighten = props.defaultLighten,
      hasPadding = props.defaultHasPadding,
    },
  } = props;
  const previewState = useBackgroundPreviewState();
  const darkenFinal =
    previewState.darkenPreview !== undefined
      ? previewState.darkenPreview
      : darken;
  const lightenFinal =
    previewState.lightenPreview !== undefined
      ? previewState.lightenPreview
      : lighten;
  const containerStyles = React.useMemo(() => getStyles(props, previewState), [
    props,
    previewState,
  ]);
  return (
    <div
      className="ory-plugins-layout-background"
      style={{ ...containerStyles, ...(hasPadding ? {} : { padding: 0 }) }}
    >
      <PaddingComponent state={props.data}>
        <div
          className="ory-plugins-layout-background__backstretch"
          style={{
            // tslint:disable-next-line:max-line-length
            backgroundImage: `linear-gradient(rgba(0, 0, 0, ${darkenFinal}), rgba(0, 0, 0, ${darkenFinal})),linear-gradient(rgba(255, 255, 255, ${lightenFinal}), rgba(255, 255, 255, ${lightenFinal}))`,
          }}
        />
        {children}
      </PaddingComponent>
    </div>
  );
};

export default BackgroundHtmlRenderer;
