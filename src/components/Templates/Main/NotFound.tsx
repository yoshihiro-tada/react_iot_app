import React from 'react';
import styles from './NotFound.module.css';

/*MUI*/
import Button from '@mui/material/Button';

class NotFound extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>ページが見つかりませんでした</h2>
        <div className={styles.back_to_top}>
          <a href="/"><Button variant="contained" size="small" sx={{fontSize: 12}}>TOPに戻る</Button></a>
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;