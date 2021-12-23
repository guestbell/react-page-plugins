import * as React from 'react';
import { ImageRendererProps } from '../types/renderer';
import { iconStyle } from './../common/styles';
import { lazyLoad } from '@react-page/editor';
import classNames from 'classnames';
import { ImageConstraintMode } from '../types/state';
import PaddingComponent from '../../common/utils/PaddingComponent';
import { getPathname, isSamePageUrl } from '../../common/utils/urlUtil';
import { Link } from 'react-router-dom';

const ImageIcon = lazyLoad(() => import('@material-ui/icons/Landscape'));

const ImageHtmlRenderer: React.FC<ImageRendererProps> = props => {
  const { isEditMode, data } = props;
  if (!data.image && !data.src) {
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
      data.constraintMode === undefined ||
      data.constraintMode === ImageConstraintMode.FullWidth,
    'ory-plugins-content-image--small-height':
      data.constraintMode === ImageConstraintMode.SmallHeight,
    'ory-plugins-content-image--medium-height':
      data.constraintMode === ImageConstraintMode.MediumHeight,
    'ory-plugins-content-image--big-height':
      data.constraintMode === ImageConstraintMode.BigHeight,
  });
  if (data.image) {
    Image = (
      <img
        className={className}
        src={data.image.src}
        srcSet={data.image.srcSet}
      />
    );
  } else {
    Image = <img className={className} src={data.src} srcSet={data.srcSet} />;
  }
  return (
    <PaddingComponent state={props.data}>
      <div className="ory-plugins-content-image__container">
        {data.href && !isEditMode ? (
          isSamePageUrl(data.href) ? (
            <Link to={getPathname(data.href)}>{Image}</Link>
          ) : (
            <a href={data.href}>{Image}</a>
          )
        ) : (
          Image
        )}
      </div>
    </PaddingComponent>
  );
};

export default ImageHtmlRenderer;
