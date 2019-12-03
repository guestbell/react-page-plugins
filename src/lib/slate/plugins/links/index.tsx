import createComponentPlugin from '../../pluginFactories/createComponentPlugin';

import * as React from 'react';
import { lazyLoad } from '@react-page/core';

const LinkIcon = lazyLoad(() => import('@material-ui/icons/Link'));

export type LinkData = {
  href: string;
  openInNewWindow?: boolean;
};

export default {
  link: createComponentPlugin<LinkData>({
    type: 'LINK/LINK',
    object: 'inline',
    icon: <LinkIcon />,
    addHoverButton: true,
    addToolbarButton: true,
    schema: {
      type: 'object',
      required: ['href'],
      properties: {
        href: {
          type: 'string',
        },
        openInNewWindow: {
          type: 'boolean',
        },
      },
    },
    deserialize: {
      tagName: 'a',
      getData: el => ({
        href: el.getAttribute('href') || '',
        openInNewWindow: el.getAttribute('target') === '_blank',
      }),
    },
    Component: ({ children, data }) => {
      return (
        <a
          target={data.get('openInNewWindow') ? '_blank' : undefined}
          href={data.get('href')}
        >
          {children}
        </a>
      );
    },
  }),
};
