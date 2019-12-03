import * as React from 'react';
import { lazyLoad } from '@react-page/core';
import { WithTheme, withTheme } from '@material-ui/core/styles';

const IconButton = lazyLoad(() => import('@material-ui/core/IconButton'));

interface ToolbarButtonCustomProps {
  icon: JSX.Element | string;
  isActive: boolean;
  disabled?: boolean;
  onClick: React.MouseEventHandler;
}

export type ToolbarButtonProps = ToolbarButtonCustomProps & WithTheme;

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  icon,
  isActive,
  onClick,
  disabled = false,
  theme,
}) => (
  <IconButton
    onMouseDown={onClick}
    style={
      isActive
        ? { color: theme.palette.primary.main }
        : disabled
        ? { color: theme.palette.grey[200] }
        : { color: theme.palette.text.primary }
    }
    disabled={disabled}
  >
    {icon}
  </IconButton>
);

export default withTheme(ToolbarButton) as React.ComponentType<
  ToolbarButtonCustomProps
>;
