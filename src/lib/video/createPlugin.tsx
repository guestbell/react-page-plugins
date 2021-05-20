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

import { VideoSettings } from './types/settings';
import { VideoState } from './types/state';
import { defaultSettings } from './default/settings';
import { CellPlugin } from '@react-page/editor';

const createPlugin: (
  settings: VideoSettings
) => CellPlugin<VideoState> = settings => {
  const mergedSettings = { ...defaultSettings, ...settings };
  const { Renderer, Controls, ...rest } = mergedSettings;
  return {
    Renderer: props => <Renderer {...rest} {...props} />,
    controls: {
      type: 'custom',
      Component: props => <Controls {...props} {...rest} />,
    },
    id: 'ory/editor/core/content/video',
    version: 1,
    icon: mergedSettings.icon,
    title: mergedSettings.translations.pluginName,
    description: mergedSettings.translations.pluginDescription,
  };
};

export default createPlugin;
