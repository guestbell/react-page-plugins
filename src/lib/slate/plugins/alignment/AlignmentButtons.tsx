import * as React from 'react';
import { lazyLoad } from '@react-page/core';
import { AlignmentButton } from './AlignmentButton';
import { AlignmentTypes } from './alignmentTypes';

const AlignLeftIcon = lazyLoad(() =>
  import('@material-ui/icons/FormatAlignLeft')
);
const AlignCenterIcon = lazyLoad(() =>
  import('@material-ui/icons/FormatAlignCenter')
);
const AlignRightIcon = lazyLoad(() =>
  import('@material-ui/icons/FormatAlignRight')
);
const AlignJustifyIcon = lazyLoad(() =>
  import('@material-ui/icons/FormatAlignJustify')
);

export const AlignmentButtons: React.FC = () => (
  <>
    <AlignmentButton alignment={AlignmentTypes.Left} icon={<AlignLeftIcon />} />
    <AlignmentButton
      alignment={AlignmentTypes.Center}
      icon={<AlignCenterIcon />}
    />
    <AlignmentButton
      alignment={AlignmentTypes.Right}
      icon={<AlignRightIcon />}
    />
    <AlignmentButton
      alignment={AlignmentTypes.Justify}
      icon={<AlignJustifyIcon />}
    />
  </>
);
