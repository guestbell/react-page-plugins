import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import Delete from '@material-ui/icons/Delete';
import * as React from 'react';
import DraftSwitch from '../draftSwitch/DraftSwitch';
import DuplicateButton from '../duplicateButton/DuplicateButton';
import { SlideProps } from '@material-ui/core/Slide';
import createStyles from '@material-ui/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/styles/withStyles';

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
}

const drawerSlideProps: Partial<SlideProps> = {
  unmountOnExit: true,
};

const drawerPaperProps: Partial<PaperProps> = {
  style: {
    backgroundColor: 'transparent',
    border: 'none',
    overflow: 'visible',
    pointerEvents: 'none',
  },
};

const styles = (theme: Theme) =>
  createStyles({
    childrenContainer: {
      // width: '100%',
      // overflow: 'auto',
    },
    paper: {
      pointerEvents: 'all',
      borderRadius: '4px 4px 0 0',
      padding: '1rem',
      paddingBottom: '0.5rem',
      paddingTop: '0.5rem',
      margin: 'auto',
      // boxShadow: '0px 1px 8px -1px rgba(0,0,0,0.4)',
      position: 'relative',
      maxWidth: 'calc(100vw - 2rem)',
    },
    divider: {
      marginLeft: '-1rem',
      marginRight: '-1rem',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
    },
    avatar: {
      marginRight: '1rem',
    },
    bottomGrid: {
      overflow: 'auto',
    },
    pluginName: {
      marginRight: 'auto',
    },
  });

const BottomToolbar: React.FC<
  BottomToolbarProps & WithStyles<typeof styles>
> = ({
  open = false,
  children,
  className,
  classes: {
    avatar,
    divider,
    paper,
    childrenContainer,
    bottomGrid,
    pluginName,
  },
  anchor = 'bottom',
  onDelete = null,
  title,
  icon = null,
  id,
  editable,
}) => {
  return (
    <Drawer
      SlideProps={drawerSlideProps}
      variant="persistent"
      className={className}
      open={open}
      anchor={anchor}
      PaperProps={drawerPaperProps}
    >
      <Paper className={paper}>
        <div className={childrenContainer}>{children}</div>
        {React.Children.count(children) > 0 && <Divider className={divider} />}
        <Grid
          container={true}
          direction="row"
          alignItems="center"
          wrap="nowrap"
          className={bottomGrid}
        >
          {icon || title ? (
            <Avatar
              children={icon || (title ? title[0] : '')}
              className={avatar}
            />
          ) : null}
          <Typography variant="subtitle1" className={pluginName}>
            {title}
          </Typography>
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
      </Paper>
    </Drawer>
  );
};

export default withStyles(styles)(BottomToolbar) as React.FC<
  BottomToolbarProps
>;
