import React from 'react';
import styles from './Navigation.module.css';

/*MUI icon*/
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlaceIcon from '@mui/icons-material/Place';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Navigation = () => {
  return (
    <React.Fragment>
      <nav>
        <ul className={styles.header_hum_menu_lists}>
          <li className={styles.header_hum_menu_list}>
            <a href="/">
              <span><HomeIcon /></span>
              TOP
              <span className={styles.arrow}><KeyboardArrowRightIcon /></span>
            </a>
          </li>
          <li className={styles.header_hum_menu_list}>
            <a href="/login">
              <span><AccountCircleIcon /></span>
              LOGIN/MY PAGE
              <span className={styles.arrow}><KeyboardArrowRightIcon /></span>
            </a>
          </li>
          <li className={styles.header_hum_menu_list}>
            <a href="/location">
              <span><PlaceIcon /></span>
              LOCATION
              <span className={styles.arrow}><KeyboardArrowRightIcon /></span>
            </a>
          </li>
          <li className={styles.header_hum_menu_list}>
            <a href="/notice">
              <span><NotificationsIcon /></span>
              NOTICE
              <span className={styles.arrow}><KeyboardArrowRightIcon /></span>
            </a>
          </li>
          <li className={styles.header_hum_menu_list}>
            <a href="/setting">
              <span><SettingsIcon /></span>
              SETTING
              <span className={styles.arrow}><KeyboardArrowRightIcon /></span>
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navigation;