import React from 'react';
import styles from './Setting.module.css';

/*MUI icon*/
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

class Setting extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>設定</h2>
        <div className={styles.setting_content}>
          <h3>LINE WORKS</h3>
          <button>LINE WORKSと連携する</button>
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