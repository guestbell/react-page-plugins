import classNames from 'classnames';
import * as React from 'react';
import { Resizable } from 'react-resizable';
import { SpacerControlsProps } from '../types/controls';
import { defaultSpacerState } from './../default/state';
import BottomToolbar from '../../common/components/bottomToolbar/BottomToolbar';

const SpacerDefaultControls: React.SFC<SpacerControlsProps> = props => {
  const {
    isPreviewMode,
    isEditMode,
    remove,
    Renderer,
    changeHeightPreview,
    commitHeight,
    state: { height } = defaultSpacerState,
  } = props;
  return (
    <div
      className={classNames('ory-plugins-content-spacer', {
        'ory-plugins-content-spacer-read-only': isPreviewMode,
      })}
    >
      {!isEditMode ? (
        <Renderer {...props} />
      ) : (
        <Resizable
          onResize={(e, data) => changeHeightPreview(data.size.height)}
          onResizeStop={(e, data) => commitHeight(data.size.height)}
          height={height}
          width={0}
        >
          <div style={{ height, position: 'relative' }}>
            <BottomToolbar
              {...props}
              icon={props.IconComponent}
              open={props.focused}
              title={props.translations.pluginName}
              onDelete={remove}
            />
            <div className="ory-plugins-content-spacer__handle">
              <svg
                viewBox="0 0 24 24"
                style={{ color: 'white', width: 24, height: 24 }}
              >
                <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
              </svg>
            </div>
          </div>
        </Resizable>
      )}
    </div>
  );
};

export default SpacerDefaultControls;
