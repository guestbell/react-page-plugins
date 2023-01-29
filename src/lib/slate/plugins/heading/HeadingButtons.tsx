import * as React from 'react';
import { lazyLoad } from '@react-page/editor';
import { HeadingButton } from './HeadingButton';
import { HeadingLevels } from './headingLevels';

const H1Icon = lazyLoad(() => import('@mui/icons-material/LooksOne'));
const H2Icon = lazyLoad(() => import('@mui/icons-material/LooksTwo'));
const H3Icon = lazyLoad(() => import('@mui/icons-material/Looks3'));
/*const H4Icon = lazyLoad(() => import('@mui/icons-material/Looks4'));
const H5Icon = lazyLoad(() => import('@mui/icons-material/Looks5'));
const H6Icon = lazyLoad(() => import('@mui/icons-material/Looks6'));*/

export const HeadingButtons: React.FC = () => (
  <>
    <HeadingButton level={HeadingLevels.H1} icon={<H1Icon />} />
    <HeadingButton level={HeadingLevels.H2} icon={<H2Icon />} />
    <HeadingButton level={HeadingLevels.H3} icon={<H3Icon />} />
    {/*<HeadingButton level={HeadingTypes.H4} icon={<H4Icon />} />
    <HeadingButton level={HeadingTypes.H5} icon={<H5Icon />} />
<HeadingButton level={HeadingTypes.H6} icon={<H6Icon />} />*/}
  </>
);
