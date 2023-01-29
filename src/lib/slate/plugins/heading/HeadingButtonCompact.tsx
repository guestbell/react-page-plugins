import * as React from 'react';
import { useSlate } from 'slate-react';
import {
  HeadingPluginOptions,
  getActiveHeadings,
  isHeadingActive,
} from './withHeadings';
import MenuItem from '@mui/material/MenuItem';
import { lazyLoad } from '@react-page/editor';
import SlateButton from '../../../common/components/slateEditor/SlateButton';
import Menu from '@mui/material/Menu';
import { Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

export interface HeadingButtonCustomProps {}

const TitleIcon = lazyLoad(() => import('@mui/icons-material/Title'));

const useStyles = makeStyles(({ palette }: Theme) => ({
  selected: {
    backgroundColor: `${palette.primary.main} !important`,
    color: `${palette.getContrastText(palette.primary.main)} !important`,
  },
}));

type HeadingButtonProps = HeadingButtonCustomProps;

const HeadingButtonRaw: React.FC<HeadingButtonProps> = props => {
  const editor = useSlate();
  const { selected } = useStyles();
  const config: HeadingPluginOptions = editor.headingsConfig;
  const activeHeadings = getActiveHeadings(editor);
  const hasValue = activeHeadings.length > 0;
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
  function handleClose() {
    setAnchor(null);
  }
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setAnchor(event.currentTarget);
  }
  const handleMenuItemClick = (level: number) => (
    event: React.MouseEvent<HTMLElement>
  ) => {
    editor.wrapHeading(level);
    handleClose();
  };
  return (
    <>
      <SlateButton
        isActive={hasValue}
        onClick={handleClick}
        icon={<TitleIcon />}
        title="Heading"
      />
      <Menu
        anchorEl={anchor}
        keepMounted={true}
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        {config.allowedHeadings.map(heading => (
          <MenuItem
            selected={isHeadingActive(editor, heading)}
            key={heading}
            value={heading}
            onClick={handleMenuItemClick(heading)}
            classes={{ selected }}
          >
            {(config.headingsNames && config.headingsNames[heading]) || heading}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default HeadingButtonRaw;
