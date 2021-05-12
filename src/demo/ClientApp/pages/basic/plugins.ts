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

// The background plugin
import background, { ModeEnum } from '../../../../lib/background/index';
// The divider plugin
import divider from '../../../../lib/divider';
// The image plugin
import image from '../../../../lib/image/index';
// The spacer plugin
import spacer from '../../../../lib/spacer/index';
// The video plugin
import video from '../../../../lib/video/index';
import { slatePlugin } from './slate';
import { muiTheme } from '../../theme/theme';
import { CellPlugin } from '@react-page/editor';

// Define which plugins we want to use.

export const cellPlugins: CellPlugin[] = [
  slatePlugin,
  background({
    enabledModes:
      ModeEnum.COLOR_MODE_FLAG |
      ModeEnum.IMAGE_MODE_FLAG |
      ModeEnum.GRADIENT_MODE_FLAG,
    theme: muiTheme,
  }),
  image({ theme: muiTheme }),
  spacer({ theme: muiTheme }),
  divider({ theme: muiTheme }),
  video({ theme: muiTheme }),
];
