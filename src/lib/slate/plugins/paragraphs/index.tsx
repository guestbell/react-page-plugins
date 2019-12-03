import * as React from 'react';
import createComponentPlugin from '../../pluginFactories/createComponentPlugin';

export default {
  paragraph: createComponentPlugin<{
    align: 'left' | 'right' | 'center' | 'justify';
  }>({
    type: 'PARAGRAPH/PARAGRAPH',
    object: 'block',
    addToolbarButton: false,
    addHoverButton: false,
    deserialize: {
      tagName: 'p',
    },

    Component: ({ children, data }) => {
      return <p style={{ textAlign: data.get('align') }}>{children}</p>;
    },
  }),
};
