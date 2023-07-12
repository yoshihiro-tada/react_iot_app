import React from 'react';
import styles from './Notice.module.css';

/*MUI icon*/

class Notice extends React.Component {
  render() {
    return (
      <React.Fragment>
          <h2>通知一覧</h2>
          <div className={styles.latest_news_sticky_note}>
            <time>XXXX.XX.XX XX:XX:XX</time>
            <p>機械番号:"{"変数"}"が停止しました。</p>
          </div>
          {/* ↓繰り返し(後で削除)↓ */}
          <div className={styles.latest_news_sticky_note}>
            <time>XXXX.XX.XX XX:XX:XX</time>
            <p>機械番号:"{"変数"}"が停止しました。</p>
          </div>
          <div className={styles.latest_news_sticky_note}>
            <time>XXXX.XX.XX XX:XX:XX</time>
            <p>機械番号:"{"変数"}"が停止しました。</p>
          </div>
          {/* ↑繰り返し(後で削除)↑ */}
      </React.Fragment>
    );
  }
}

export default Notice;