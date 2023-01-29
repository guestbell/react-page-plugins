import * as React from 'react';
import { lazyLoad } from '@react-page/editor';
import { ListButton } from './ListButton';
import { ListTypes } from './listTypes';

const ListIcon = lazyLoad(() =>
  import('@mui/icons-material/FormatListBulleted')
);
const OrderedListIcon = lazyLoad(() =>
  import('@mui/icons-material/FormatListNumbered')
);
export const ListButtons: React.FC = () => (
  <>
    <ListButton type={ListTypes.UL} icon={<ListIcon />} />
    <ListButton type={ListTypes.OL} icon={<OrderedListIcon />} />
  </>
);
