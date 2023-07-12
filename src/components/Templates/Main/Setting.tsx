import React from 'react';
import styles from './Setting.module.css';

/*MUI*/
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

class Setting extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>設定</h2>
        <div className={styles.setting_content}>
          <h3>LINE WORKS</h3>
          <Button variant="contained"  size="small" sx={{fontSize: 12}}>LINE WORKSと連携する</Button>
        </div>
        <div className={styles.setting_content}>
          <h3>通知</h3>
          <FormControlLabel control={<Switch defaultChecked />} label="ON/OFF" />
        </div>
      </React.Fragment>
    );
  }
}

export default Setting;