import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Checkbox() {
    return (
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" style="border-radius:100%" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" style="border-radius:100%"/>
      </FormGroup>
    );
  }