import * as React from 'react';
import { lazyLoad } from '@react-page/core';
import { HeadingButton } from './HeadingButton';
import { HeadingLevels } from './headingLevels';

const H1Icon = lazyLoad(() => import('@material-ui/icons/LooksOne'));
const H2Icon = lazyLoad(() => import('@material-ui/icons/LooksTwo'));
const H3Icon = lazyLoad(() => import('@material-ui/icons/Looks3'));
/*const H4Icon = lazyLoad(() => import('@material-ui/icons/Looks4'));
const H5Icon = lazyLoad(() => import('@material-ui/icons/Looks5'));
const H6Icon = lazyLoad(() => import('@material-ui/icons/Looks6'));*/

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
