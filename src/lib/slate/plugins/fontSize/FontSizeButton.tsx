import * as React from 'react';
import { useSlate } from 'slate-react';
import { FontSizePluginConfig, getActiveFontSizes, isFontSizeActive } from './';
import MenuItem from '@material-ui/core/MenuItem';
import { lazyLoad } from '@react-page/editor';
import SlateButton from '../../../common/components/slateEditor/SlateButton';
import Menu from '@material-ui/core/Menu';

export interface FontSizeButtonCustomProps {}

const FormatSizeIcon = lazyLoad(() => import('@material-ui/icons/TextFields'));

type FontSizeButtonProps = FontSizeButtonCustomProps;

const FontSizeButtonRaw: React.FC<FontSizeButtonProps> = props => {
  const editor = useSlate();
  const config: FontSizePluginConfig = editor.fontSizeConfig;
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
    editor.changeFontSize(fontSize);
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
          >
            {(config.fontSizesNames && config.fontSizesNames[fontSize]) ||
              fontSize}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default FontSizeButtonRaw;
