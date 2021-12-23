import * as React from 'react';
import { RenderElementProps } from 'slate-react';
import { getPathname, isSamePageUrl } from '../../../common/utils/urlUtil';
import { LinkType } from './linkType';
import { Link as RouterLink } from 'react-router-dom';

export const Link: React.FC<RenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  switch (element.type) {
    case LinkType:
      if (isSamePageUrl(element.url)) {
        return (
          <RouterLink {...attributes} to={getPathname(element.url)}>
            {children}
          </RouterLink>
        );
      }
      return (
        <a {...attributes} href={element.url}>
          {children}
        </a>
      );
    default:
      return null;
  }
};
