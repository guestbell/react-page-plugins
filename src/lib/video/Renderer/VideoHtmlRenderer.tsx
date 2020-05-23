/*
 * This file is part of ORY Editor.
 *
 * ORY Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ORY Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ORY Editor.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license LGPL-3.0
 * @copyright 2016-2018 Aeneas Rekkas
 * @author Aeneas Rekkas <aeneas+oss@aeneas.io>
 *
 */

import * as React from 'react';
import PlayArrow from '@material-ui/icons/PlayArrow';
import { iconStyle } from '../common/styles';

import { lazyLoad } from '@react-page/core';

import { VideoHtmlRendererProps } from '../types/renderer';
import PaddingComponent from '../../common/utils/PaddingComponent';
import { VideoTypeEnum } from '../types/enum/VideoTypeEnum';

// react player is big, better lazy load it.
const ReactPlayer = lazyLoad(() => import('react-player'));

const Display: React.SFC<VideoHtmlRendererProps> = props => {
  const {
    state: { type, embeddedSrc, uploadedSrc },
    readOnly,
  } = props;
  return (
    <PaddingComponent state={props.state}>
      {type === VideoTypeEnum.Embedded ? (
        embeddedSrc ? (
          <div
            style={{ position: 'relative', height: 0, paddingBottom: '65.25%' }}
          >
            {readOnly ? null : (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 10,
                }}
              />
            )}
            <ReactPlayer
              url={embeddedSrc}
              height="100%"
              width="100%"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        ) : (
          <div className="ory-plugins-content-video-placeholder">
            <PlayArrow style={iconStyle} />
          </div>
        )
      ) : null}
      {uploadedSrc && type === VideoTypeEnum.Uploaded ? (
        <div className="ory-content-plugin-html5-video">
          <video
            autoPlay={true}
            controls={true}
            loop={true}
            muted={true}
            width="100%"
            key={uploadedSrc}
          >
            <source
              src={uploadedSrc}
              type={`video/${uploadedSrc.split('.').pop()}`}
            />
          </video>
        </div>
      ) : null}
    </PaddingComponent>
  );
};

export default Display;
