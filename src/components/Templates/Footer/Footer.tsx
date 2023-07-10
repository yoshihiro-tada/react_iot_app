import React from 'react';
import styles from './Footer.module.css';

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
      <footer>
        <div className={styles.footer_bar}>
          <div className={styles.copy_right}>&copy; Fukushin</div>
        </div>
      </footer>
      </React.Fragment>
    );
  }
}

export default Footer;