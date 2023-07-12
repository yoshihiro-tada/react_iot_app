import React from 'react';
import styles from './Header.module.css';
import { FC, useState } from "react";
import { HumButton } from './HumButton'
import Navigation from './Navigation'

/*MUI icon*/
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const toggleFunction = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <header>
        <div className={styles.header_bar}>
          <div className={styles.header_logo_btn}>
            <a href="/">
              <img src="/logo.png" alt="fkushin-logo"/>
            </a>
          </div>
          <div className={styles.header_hum_open_btn}>
              {/*<MenuIcon />*/}
            <HumButton 
              open = { open }
              controls = "navigation"
              label = "メニューを開きます"
              onClick = {toggleFunction}
            />
          </div>
        </div>
        <Navigation id="navigation" open={open}/>
        {/*
        <Modal />
        */}
      </header>
    </React.Fragment>
  );
};

/*
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
*/

export default Header;