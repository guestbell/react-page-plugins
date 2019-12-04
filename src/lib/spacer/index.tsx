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

import createPlugin from './createPlugin';

import SpacerHtmlRenderer from './Renderer/SpacerHtmlRenderer';
import { lazyLoad } from '@react-page/core';
import { SpacerSettings } from './types/settings';
import { MakeOptional } from '../common/types/makeOptional';

const SpacerDefaultControls = lazyLoad(() =>
  import('./Controls/SpacerDefaultControls')
);

export default (
  settings: MakeOptional<SpacerSettings, 'Renderer' | 'Controls'>
) => {
  const plugin = createPlugin({
    Renderer: SpacerHtmlRenderer,
    Controls: SpacerDefaultControls,
    ...settings,
  });
  return plugin;
};
