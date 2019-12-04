import * as React from 'react';
import { WithTheme, withTheme } from '@material-ui/core/styles';
import Button from 'guestbell-forms/build/components/button';

interface ToolbarButtonCustomProps {
  icon: JSX.Element;
  isActive: boolean;
  disabled?: boolean;
  onClick: React.MouseEventHandler;
  title?: string;
}

export type ToolbarButtonProps = ToolbarButtonCustomProps & WithTheme;

const SlateButton: React.FC<ToolbarButtonProps> = ({
  icon,
  isActive,
  onClick,
  disabled = false,
  theme,
  title,
}) => (
  <Button
    style={
      isActive
        ? { color: theme.palette.primary.main }
        : { color: theme.palette.action.active }
    }
    buttonProps={{ onMouseDown: onClick }}
    disabled={disabled}
    tooltip={title}
    noShadow={true}
  >
    {icon}
  </Button>
);

export default withTheme(SlateButton) as React.ComponentType<
  ToolbarButtonCustomProps
>;
