import * as React from 'react';
import { useSlate } from 'slate-react';
import {
  HeadingPluginOptions,
  getActiveHeadings,
  isHeadingActive,
  HeadingCommands,
} from './withHeadings';
import MenuItem from '@material-ui/core/MenuItem';
import { lazyLoad } from '@react-page/core';
import withStyles, { WithStyles } from '@material-ui/styles/withStyles';
import createStyles from '@material-ui/styles/createStyles';
import SlateButton from '../../Controls/buttons/SlateButton';
import Menu from '@material-ui/core/Menu';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

export interface HeadingButtonCustomProps {}

const TitleIcon = lazyLoad(() => import('@material-ui/icons/Title'));

const styles = ({ palette }: Theme) =>
  createStyles({
    selected: {
      backgroundColor: `${palette.primary.main} !important`,
      color: `${palette.getContrastText(palette.primary.main)} !important`,
    },
  });

type HeadingButtonProps = HeadingButtonCustomProps & WithStyles<typeof styles>;

const HeadingButtonRaw: React.FC<HeadingButtonProps> = props => {
  const editor = useSlate();
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
    editor.exec({ type: HeadingCommands.ToggleHeading, level });
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
            classes={{ selected: props.classes.selected }}
          >
            {(config.headingsNames && config.headingsNames[heading]) || heading}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default withStyles(styles)(HeadingButtonRaw);
