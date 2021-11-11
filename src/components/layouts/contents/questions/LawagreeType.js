import * as React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
    <div>
      법적인 내용 .....동의하십니까?
      <br></br>
      <Checkbox {...label} defaultChecked />
    </div>
  );
}
