import * as React from 'react';
import withTheme, { WithTheme } from '@material-ui/core/styles/withTheme';
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
}) => {
  const onMouseDown = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (e.button === 0) {
        onClick(e);
      }
    },
    [onClick]
  );
  const buttonProps = React.useMemo(() => ({ onMouseDown }), [onMouseDown]);
  return (
    <Button
      type={isActive ? 'primary' : 'gray'}
      // blank={true}
      circular={true}
      buttonProps={buttonProps}
      disabled={disabled}
      tooltip={title}
      noShadow={true}
      text={true}
    >
      {icon}
    </Button>
  );
};

export default withTheme(SlateButton) as React.ComponentType<
  ToolbarButtonCustomProps
>;
