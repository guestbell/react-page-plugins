import classNames from 'classnames';
import * as React from 'react';
import { Resizable } from 'react-resizable';
import { SpacerControlsProps } from '../types/controls';
import { defaultSpacerState } from './../default/state';

const SpacerDefaultControls: React.FC<SpacerControlsProps> = props => {
  const {
    isPreviewMode,
    onChange,
    data: { height } = defaultSpacerState,
  } = props;
  const [heightPreview, setHeightPreview] = React.useState(height);
  const changeHeightPreview = React.useCallback((h: number) => {
    if (!h || h < 24) {
      h = 24;
    }
    setHeightPreview(h);
  }, []);

  const commitHeight = React.useCallback(
    (h: number) => {
      if (!h || h < 24) {
        h = 24;
      }
      setHeightPreview(h);
      onChange({ height: h });
    },
    [onChange]
  );
  React.useEffect(() => {
    if (heightPreview !== height) {
      setHeightPreview(height);
      onChange({ height });
    }
  }, [height, commitHeight]);
  const finalHeight = heightPreview ?? height ?? 0;
  return (
    <div
      className={classNames('ory-plugins-content-spacer', {
        'ory-plugins-content-spacer-read-only': isPreviewMode,
      })}
    >
      <Resizable
        onResize={(e, data) => changeHeightPreview(data.size.height)}
        onResizeStop={(e, data) => commitHeight(data.size.height)}
        height={finalHeight}
        width={0}
      >
        <div style={{ height: finalHeight, position: 'relative' }}>
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
    </div>
  );
};

export default SpacerDefaultControls;
