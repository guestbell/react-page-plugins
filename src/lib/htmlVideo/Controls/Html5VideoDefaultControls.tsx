import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { defaultHtml5VideoState } from '../default/state';
import { Html5VideoControlsProps } from './../types/controls';
import BottomToolbar from '../../common/components/bottomToolbar/BottomToolbar';

export interface Html5VideoDefaultControlsProps {}

/*const changeUrl = (onChange: (state: Html5VideoState) => void) => (
  event: React.ChangeEvent<HTMLInputElement>
) => event.target && onChange({ url: event.target.value });*/

const Html5VideoDefaultControls: React.SFC<Html5VideoControlsProps> = props => {
  const {
    state: { url } = defaultHtml5VideoState,
    changeUrl,
    focused,
    theme,
    IconComponent,
    remove,
  } = props;
  return (
    <BottomToolbar
      open={focused}
      title={props.translations.pluginName}
      onDelete={remove}
      icon={IconComponent}
      {...props}
      theme={theme}
    >
      <TextField
        fullWidth={true}
        placeholder={props.translations.urlPlaceholder}
        label={props.translations.urlLabel}
        onChange={e => changeUrl(e.target.value)}
        value={url}
      />
    </BottomToolbar>
  );
};

export default Html5VideoDefaultControls;
