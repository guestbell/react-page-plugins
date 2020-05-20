import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Slider from '@material-ui/core/Slider';
import debounce from '@material-ui/core/utils/debounce';

export interface PaddingSliderProps {
  Icon?: JSX.Element;
  title?: string;
  onValueChange: (value: number) => void;
  value: number;
  min?: number;
  max?: number;
  step?: number;
}

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 'auto',
  },
});

const PaddingSlider: React.FC<PaddingSliderProps> = props => {
  const {
    Icon,
    title,
    value,
    onValueChange,
    min = 0,
    max = 50,
    step = 1,
  } = props;
  const classes = useStyles();
  const [innerValue, setInnerValue] = React.useState(value || 0);
  const onValueChangeDebounced = React.useCallback(
    debounce(onValueChange, 100),
    [onValueChange]
  );
  const onSliderChange = React.useCallback(
    (e: React.ChangeEvent, val: number) => {
      onValueChangeDebounced(val);
      setInnerValue(val);
      setTextValue(val.toFixed());
    },
    [onValueChangeDebounced]
  );
  const [textValue, setTextValue] = React.useState((value || 0).toFixed());
  const onTextValueChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTextValue(e.target.value);
      let val = Number(e.target.value);
      if (val < min) {
        val = min;
      } else if (val > max) {
        val = max;
      } else if (isNaN(val)) {
        val = innerValue;
      }
      setInnerValue(val || 0);
    },
    [innerValue, min, max, setInnerValue]
  );
  const sliderCommitted = React.useCallback(() => {
    setTextValue((innerValue || 0).toFixed());
  }, [innerValue, setTextValue]);
  return (
    <>
      {title && <Typography gutterBottom={true}>{title}</Typography>}
      <Grid container={true} spacing={2} alignItems="center">
        {Icon && <Grid item={true}>{Icon}</Grid>}
        <Grid item={true} xs={true}>
          <Slider
            value={innerValue || 0}
            onChange={onSliderChange}
            onChangeCommitted={sliderCommitted}
            min={min}
            max={max}
            step={step}
          />
        </Grid>
        <Grid item={true}>
          <Input
            className={classes.input}
            value={textValue}
            margin="dense"
            onChange={onTextValueChange}
            inputProps={{
              step,
              min,
              max,
              type: 'number',
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PaddingSlider;
