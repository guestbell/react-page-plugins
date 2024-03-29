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

import TextField from '@mui/material/TextField';
import * as React from 'react';
import { defaultVideoState } from '../default/state';
import { VideoControlsProps } from '../types/controls';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { VideoTypeEnum } from '../types/enum/VideoTypeEnum';
import EmbeddedIcon from '@mui/icons-material/YouTube';
import UploadedIcon from '@mui/icons-material/PlayArrow';

const Form: React.FC<VideoControlsProps> = props => {
  const {
    readOnly,
    onChange,
    data: {
      type = props.defaultType,
      embeddedSrc = '',
      uploadedSrc = '',
    } = defaultVideoState,
  } = props;

  const changeEmbeddedSrc = React.useCallback(
    (src: string) => {
      onChange({ embeddedSrc: src });
    },
    [onChange]
  );

  const changeUploadedSrc = React.useCallback(
    (src: string) => {
      onChange({ uploadedSrc: src });
    },
    [onChange]
  );

  const changeType = React.useCallback(
    (type: VideoTypeEnum) => {
      onChange({ type });
    },
    [onChange]
  );

  const handleTabTypeChange = React.useCallback(
    (e: React.ChangeEvent, tabType: number) => changeType(tabType),
    [changeType]
  );

  const handleEmbeddedSrcChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      changeEmbeddedSrc(e.target.value),
    [changeEmbeddedSrc]
  );

  const handleUploadedSrcChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      changeUploadedSrc(e.target.value),
    [changeUploadedSrc]
  );

  return !readOnly ? (
    <>
      <Tabs value={type} onChange={handleTabTypeChange} centered={true}>
        {(props.enabledTypes & VideoTypeEnum.Embedded) > 0 && (
          <Tab
            icon={
              <EmbeddedIcon
                color={
                  (type & VideoTypeEnum.Embedded) > 0 ? 'primary' : 'action'
                }
              />
            }
            label="Embedded"
            value={VideoTypeEnum.Embedded}
          />
        )}
        {(props.enabledTypes & VideoTypeEnum.Uploaded) > 0 && (
          <Tab
            icon={
              <UploadedIcon
                color={
                  (type & VideoTypeEnum.Uploaded) > 0 ? 'primary' : 'action'
                }
              />
            }
            label="Uploaded"
            value={VideoTypeEnum.Uploaded}
          />
        )}
      </Tabs>
      <div className="p-3">
        {type === VideoTypeEnum.Embedded && (
          <>
            <TextField
              fullWidth={true}
              placeholder={props.translations.embeddedPlaceholder}
              label={props.translations.embeddedLabel}
              value={embeddedSrc}
              onChange={handleEmbeddedSrcChange}
            />
          </>
        )}
        {type === VideoTypeEnum.Uploaded && (
          <>
            <TextField
              fullWidth={true}
              placeholder={props.translations.uploadedPlaceholder}
              label={props.translations.uploadedLabel}
              value={uploadedSrc}
              onChange={handleUploadedSrcChange}
            />
          </>
        )}
      </div>
    </>
  ) : null;
};

export default Form;
