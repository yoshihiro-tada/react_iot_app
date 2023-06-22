import React from 'react';
import styles from './Footer.module.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className={styles.footer_bar}>
          <div className={styles.copy_right}>&copy; Fukushin</div>
        </div>
      </div>
    );
  }
}

export default Footer;