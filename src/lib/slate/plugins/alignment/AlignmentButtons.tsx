import * as React from 'react';
import { lazyLoad } from '@react-page/editor';
import { AlignmentButton } from './AlignmentButton';
import { AlignmentTypes } from './alignmentTypes';

const AlignLeftIcon = lazyLoad(() =>
  import('@mui/icons-material/FormatAlignLeft')
);
const AlignCenterIcon = lazyLoad(() =>
  import('@mui/icons-material/FormatAlignCenter')
);
const AlignRightIcon = lazyLoad(() =>
  import('@mui/icons-material/FormatAlignRight')
);
const AlignJustifyIcon = lazyLoad(() =>
  import('@mui/icons-material/FormatAlignJustify')
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
