import * as React from 'react';
import { WithTheme } from '@mui/styles';
import withTheme from '@mui/styles/withTheme';
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
    type="gray"
    blank={true}
    circular={true}
    style={
      isActive
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          { color: (theme as any)?.palette?.primary?.main }
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          { color: (theme as any)?.palette?.action?.active }
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
