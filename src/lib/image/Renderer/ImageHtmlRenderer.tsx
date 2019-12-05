import * as React from 'react';
import { ImageRendererProps } from '../types/renderer';
import { iconStyle } from './../common/styles';
import { lazyLoad } from '@react-page/core';
import classNames from 'classnames';
import { ImageConstraintMode } from '../types/state';

const ImageIcon = lazyLoad(() => import('@material-ui/icons/Landscape'));

const ImageHtmlRenderer: React.SFC<ImageRendererProps> = props => {
  const { isEditMode, state } = props;
  if (!state.image && !state.src) {
    return (
      <div>
        <div className="ory-plugins-content-image-placeholder">
          <ImageIcon style={iconStyle} />
        </div>
      </div>
    );
  }
  let Image: JSX.Element;
  const className = classNames('ory-plugins-content-image', {
    'ory-plugins-content-image--fw':
      state.constraintMode === undefined ||
      state.constraintMode === ImageConstraintMode.FullWidth,
    'ory-plugins-content-image--small-height':
      state.constraintMode === ImageConstraintMode.SmallHeight,
    'ory-plugins-content-image--medium-height':
      state.constraintMode === ImageConstraintMode.MediumHeight,
    'ory-plugins-content-image--big-height':
      state.constraintMode === ImageConstraintMode.BigHeight,
  });
  if (state.image) {
    Image = (
      <img
        className={className}
        src={state.image.src}
        srcSet={state.image.srcSet}
      />
    );
  } else {
    Image = <img className={className} src={state.src} srcSet={state.srcSet} />;
  }
  return (
    <div className="ory-plugins-content-image__container">
      {state.href && !isEditMode ? <a href={state.href}>{Image}</a> : Image}
    </div>
  );
};

export default ImageHtmlRenderer;
