import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import * as React from 'react';
import { DraftSwitch } from '../draftSwitch/DraftSwitch';
import { DuplicateButton } from '../duplicateButton/DuplicateButton';
import { SlideProps } from '@material-ui/core/Slide';
import { PaddingButton } from '../paddingButton/PaddingButton';
import { SelectParentButton } from '../selectParentButton/SelectParentButton';
import classNames from 'classnames';
import DeleteButton from '../deleteButton/DeleteButton';
import Portal from '@material-ui/core/Portal';
import { makeStyles } from '@material-ui/core';
import { BottomToolbarProps, usePluginOfCell } from '@react-page/editor';

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

const useStyles = makeStyles((theme: Theme) => ({
  childrenContainer: {
    // width: '100%',
    // overflow: 'auto',
    '& > div > div': {
      flex: 'initial !important',
      overflow: 'initial !important',
    },
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
    marginRight: 'auto',
  },
  bottomGrid: {
    overflow: 'auto',
  },
  pluginName: {
    marginRight: 'auto',
  },
}));

const BottomToolbar: React.FC<BottomToolbarProps> = ({
  open = false,
  children,
  className,
  anchor = 'bottom',
  pluginControls,
  nodeId,
}) => {
  const { paper, avatar, bottomGrid, childrenContainer, divider } = useStyles();
  const { title, icon } = usePluginOfCell(nodeId) ?? {};
  return (
    <Portal>
      <Drawer
        SlideProps={drawerSlideProps}
        variant="persistent"
        className={className}
        open={open}
        anchor={anchor}
        PaperProps={drawerPaperProps}
      >
        <Paper className={classNames(paper, 'bottomToolbar')}>
          <div className={childrenContainer}>
            {children}
            {pluginControls}
          </div>
          {React.Children.count(children) > 0 && (
            <Divider className={divider} />
          )}
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
            <DraftSwitch nodeId={nodeId} />
            <PaddingButton nodeId={nodeId} />
            <SelectParentButton nodeId={nodeId} />
            <DuplicateButton nodeId={nodeId} />
            <DeleteButton nodeId={nodeId} />
          </Grid>
        </Paper>
      </Drawer>
    </Portal>
  );
};

export default BottomToolbar;
