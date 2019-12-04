import * as React from 'react';
import { lazyLoad } from '@react-page/core';
import { ListButton } from './ListButton';
import { ListTypes } from './withLists';

const ListIcon = lazyLoad(() =>
  import('@material-ui/icons/FormatListBulleted')
);
const OrderedListIcon = lazyLoad(() =>
  import('@material-ui/icons/FormatListNumbered')
);
export const ListButtons: React.FC = () => (
  <>
    <ListButton type={ListTypes.UL} icon={<ListIcon />} />
    <ListButton type={ListTypes.OL} icon={<OrderedListIcon />} />
  </>
);
