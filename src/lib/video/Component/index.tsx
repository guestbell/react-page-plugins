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
import { VideoProps } from './../types/component';
import { VideoTypeEnum } from '../types/enum/VideoTypeEnum';

export interface VideoState {}

class Video extends React.PureComponent<VideoProps, VideoState> {
  constructor(props: VideoProps) {
    super(props);
    this.state = {};
    this.changeEmbeddedSrc = this.changeEmbeddedSrc.bind(this);
    this.changeUploadedSrc = this.changeUploadedSrc.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  render() {
    const { Controls, readOnly, Renderer } = this.props;
    return (
      <>
        {!readOnly ? (
          <Controls
            {...this.props}
            state={this.props.state}
            changeEmbeddedSrc={this.changeEmbeddedSrc}
            changeUploadedSrc={this.changeUploadedSrc}
            changeType={this.changeType}
          />
        ) : null}
        <Renderer {...this.props} />
      </>
    );
  }

  private changeEmbeddedSrc(src: string) {
    this.props.onChange({ embeddedSrc: src });
  }

  private changeUploadedSrc(src: string) {
    this.props.onChange({ uploadedSrc: src });
  }

  private changeType(type: VideoTypeEnum) {
    this.props.onChange({ type });
  }
}

export default Video;

// <div className="ory-content-plugin--video">
