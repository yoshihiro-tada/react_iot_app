import React from 'react';
import styles from './Top.module.css';
/*
import styles from './Header.module.css';
*/

/*MUI icon*/

class Top extends React.Component {
  render() {
    return (
      <div className="top_main">
        <main className={styles.main}>
          <h2>新着通知</h2>
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
          <div className={styles.latest_news_sticky_note_more_link}>
            <a href="/">more</a>
          </div>

          <h2>担当機器リスト</h2>
        <div className={styles.role_list_cards}>
          <div className={styles.role_list_card}>
            <p>機器番号：変数</p>
            <p>継続稼働時間：変数</p>
          </div>
        </div>

        </main>
      </div>
    );
  }
}

export default Top;