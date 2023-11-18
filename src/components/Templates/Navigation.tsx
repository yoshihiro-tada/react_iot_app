import { FC } from "react";
import styles from './Navigation.module.css';

/*MUI icon*/
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlaceIcon from '@mui/icons-material/Place';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type Props = {
  open: boolean;
  id: string;
};

export const Navigation: FC<Props> = ({ open, id }) => {
  return (
    <React.Fragment>
      <nav id={id} aria-hidden={!open} className={styles.navigation}>
        <ul className={styles.header_hum_menu_lists}>
          <li className={styles.header_hum_menu_list}>
            <a href="/">
              <span><HomeIcon fontSize="large"/></span>
              TOP
              <span className={styles.arrow}><KeyboardArrowRightIcon fontSize="large"/></span>
            </a>
          </li>
          <li className={styles.header_hum_menu_list}>
            <a href="/login">
              <span><AccountCircleIcon fontSize="large"/></span>
              LOGIN/MY PAGE
              <span className={styles.arrow}><KeyboardArrowRightIcon fontSize="large"/></span>
            </a>
          </li>
          <li className={styles.header_hum_menu_list}>
            <a href="/location">
              <span><PlaceIcon fontSize="large"/></span>
              LOCATION
              <span className={styles.arrow}><KeyboardArrowRightIcon fontSize="large"/></span>
            </a>
          </li>
          <li className={styles.header_hum_menu_list}>
            <a href="/notice">
              <span><NotificationsIcon fontSize="large"/></span>
              NOTICE
              <span className={styles.arrow}><KeyboardArrowRightIcon fontSize="large"/></span>
            </a>
          </li>
          <li className={styles.header_hum_menu_list}>
            <a href="/setting">
              <span><SettingsIcon fontSize="large"/></span>
              SETTING
              <span className={styles.arrow}><KeyboardArrowRightIcon fontSize="large"/></span>
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
};

export default Navigation;