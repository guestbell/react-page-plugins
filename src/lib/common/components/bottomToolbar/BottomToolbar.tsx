import { Theme } from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import Delete from '@material-ui/icons/Delete';
import * as React from 'react';
import DraftSwitch from '../draftSwitch/DraftSwitch';
import DuplicateButton from '../duplicateButton/DuplicateButton';

export interface BottomToolbarProps {
  open?: boolean;

  children?: Object;
  className?: string;
  title?: string;
  anchor?: 'top' | 'bottom' | 'left' | 'right';
  onDelete?: () => void;
  // tslint:disable-next-line:no-any
  icon?: any;
  // FIXME: seems like we use more and more information about the current cell. we should refactor this
  id: string;
  editable?: string;
  theme: Theme;
}

const BottomToolbar: React.SFC<BottomToolbarProps> = ({
  open = false,
  children,
  className,
  theme,

  anchor = 'bottom',
  onDelete = null,
  title,
  icon = null,
  id,
  editable,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Drawer
        SlideProps={{
          unmountOnExit: true,
        }}
        variant="persistent"
        className={className}
        open={open}
        anchor={anchor}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            border: 'none',
            overflow: 'visible',
            pointerEvents: 'none',
          },
        }}
      >
        <Paper
          style={{
            pointerEvents: 'all',
            borderRadius: '4px 4px 0 0',
            padding: '12px 24px',
            margin: 'auto',
            boxShadow: '0px 1px 8px -1px rgba(0,0,0,0.4)',
            position: 'relative',
            minWidth: '50vw',
            maxWidth: 'calc(100vw - 220px)',
          }}
        >
          {children}
          {React.Children.count(children) > 0 && (
            <Divider
              style={{
                marginLeft: -24,
                marginRight: -24,
                marginTop: 12,
                marginBottom: 12,
              }}
            />
          )}
          <>
            <Grid container={true} direction="row" alignItems="center">
              {icon || title ? (
                <Grid item={true}>
                  <Avatar
                    children={icon || (title ? title[0] : '')}
                    style={{
                      marginRight: 16,
                    }}
                  />
                </Grid>
              ) : null}
              <Grid item={true}>
                <Typography variant="subtitle1">{title}</Typography>
              </Grid>
              <Grid item={true} style={{ marginLeft: 'auto' }}>
                <DraftSwitch id={id} editable={editable} />
                <DuplicateButton id={id} editable={editable} />
                {onDelete ? (
                  <IconButton
                    onClick={onDelete}
                    aria-label="delete"
                    color="secondary"
                    title="Delete"
                  >
                    <Delete />
                  </IconButton>
                ) : null}
              </Grid>
            </Grid>
          </>
        </Paper>
      </Drawer>
    </ThemeProvider>
  );
};

export default BottomToolbar;
