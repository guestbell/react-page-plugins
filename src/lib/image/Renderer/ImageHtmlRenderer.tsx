import * as React from 'react';
import { ImageRendererProps } from '../types/renderer';
import { iconStyle } from './../common/styles';
import { lazyLoad } from '@react-page/core';

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
  if (state.image) {
    Image = (
      <img
        className="ory-plugins-content-image"
        src={state.image.src}
        srcSet={state.image.srcSet}
      />
    );
  } else {
    Image = (
      <img
        className="ory-plugins-content-image"
        src={state.src}
        srcSet={state.srcSet}
      />
    );
  }
  return (
    <div>
      {state.href && !isEditMode ? <a href={state.href}>{Image}</a> : Image}
    </div>
  );
};

export default ImageHtmlRenderer;
