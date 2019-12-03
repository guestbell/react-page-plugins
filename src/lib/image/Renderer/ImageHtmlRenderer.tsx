import * as React from 'react';
import { ImageRendererProps } from '../types/renderer';
import { iconStyle } from './../common/styles';
import { lazyLoad } from '@react-page/core';

const ImageIcon = lazyLoad(() => import('@material-ui/icons/Landscape'));

const ImageHtmlRenderer: React.SFC<ImageRendererProps> = props => {
  const { isEditMode, state } = props;
  if (!state.image) {
    return (
      <div>
        <div className="ory-plugins-content-image-placeholder">
          <ImageIcon style={iconStyle} />
        </div>
      </div>
    );
  }
  const Image = (
    <img
      className="ory-plugins-content-image"
      alt={state.caption}
      src={state.image.src}
      srcSet={state.image.srcSet}
    />
  );
  return (
    <div>
      {state.href && !isEditMode ? (
        <a href={state.href} target={state.target} rel={state.rel}>
          {Image}
        </a>
      ) : (
        Image
      )}
    </div>
  );
};

export default ImageHtmlRenderer;
