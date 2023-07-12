import React from 'react';
import styles from './Header.module.css';
import Navigation from './Navigation'

/*MUI icon*/
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className={styles.header_bar}>
          <div className={styles.header_hum_open_btn}>
            <button>
              <img src="/logo.png" alt="fkushin-logo"/>
            </button>
          </div>
          <div className={styles.header_profile_icon}>
              <MenuIcon />
          </div>
        </div>
        <Modal />
      </header>
    </React.Fragment>
  );
};

function Modal() {
  return (
    <div className={styles.header_hum_menu_bg}>
      <div className={styles.header_hum_close_btn}>
        <button>
          <CloseIcon />
        </button>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;