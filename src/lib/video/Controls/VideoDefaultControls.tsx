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

import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { defaultVideoState } from '../default/state';
import { VideoControlsProps } from '../types/controls';
import BottomToolbar from '../../common/components/bottomToolbar/BottomToolbar';

const Form: React.SFC<VideoControlsProps> = props => {
  const {
    focused,
    readOnly,
    changeSrc,
    remove,
    state: { src } = defaultVideoState,
  } = props;

  return !readOnly && focused ? (
    <BottomToolbar
      open={focused}
      title={props.translations.pluginName}
      icon={props.IconComponent}
      onDelete={remove}
      {...props}
    >
      <TextField
        fullWidth={true}
        placeholder={props.translations.placeholder}
        label={props.translations.label}
        value={src}
        onChange={e => changeSrc(e.target.value)}
      />
    </BottomToolbar>
  ) : null;
};

export default Form;
