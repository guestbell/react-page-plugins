import * as React from 'react';
import { useSlate } from 'slate-react';
import {
  FontSizePluginOptions,
  getActiveFontSizes,
  isFontSizeActive,
  FontSizeCommands,
} from './withFontSizes';
import MenuItem from '@material-ui/core/MenuItem';
import { lazyLoad } from '@react-page/core';
import withStyles, { WithStyles } from '@material-ui/styles/withStyles';
import createStyles from '@material-ui/styles/createStyles';
import SlateButton from '../../Controls/buttons/SlateButton';
import Menu from '@material-ui/core/Menu';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

export interface FontSizeButtonCustomProps {}

const FormatSizeIcon = lazyLoad(() => import('@material-ui/icons/TextFields'));

const styles = ({ palette }: Theme) =>
  createStyles({
    selected: {
      backgroundColor: `${palette.primary.main} !important`,
      color: `${palette.getContrastText(palette.primary.main)} !important`,
    },
  });

type FontSizeButtonProps = FontSizeButtonCustomProps &
  WithStyles<typeof styles>;

const FontSizeButtonRaw: React.FC<FontSizeButtonProps> = props => {
  const editor = useSlate();
  const config: FontSizePluginOptions = editor.fontSizeConfig;
  const activeFontSizes = getActiveFontSizes(editor);
  const hasValue = activeFontSizes.length > 0;
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
  function handleClose() {
    setAnchor(null);
  }
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchor(event.currentTarget);
  }
  const handleMenuItemClick = (fontSize: number) => (
    event: React.MouseEvent<HTMLElement>
  ) => {
    editor.exec({ type: FontSizeCommands.ChangeFontSize, fontSize });
    handleClose();
  };
  return (
    <>
      <SlateButton
        isActive={hasValue}
        onClick={handleClick}
        icon={<FormatSizeIcon />}
        title="Font size"
      />
      <Menu
        anchorEl={anchor}
        keepMounted={true}
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        {config.allowedFontSizes.map(fontSize => (
          <MenuItem
            selected={isFontSizeActive(editor, fontSize)}
            key={fontSize}
            value={fontSize}
            onClick={handleMenuItemClick(fontSize)}
            classes={{ selected: props.classes.selected }}
          >
            {(config.fontSizesNames && config.fontSizesNames[fontSize]) ||
              fontSize}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default withStyles(styles)(FontSizeButtonRaw);
