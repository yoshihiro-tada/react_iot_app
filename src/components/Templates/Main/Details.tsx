import React from 'react';
import styles from './Details.module.css';

class Details extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>機器情報 詳細</h2>
        <ul className={styles.details_list}>
          <li>機器番号:001</li>
          <li>継続[稼働/停止]時間:XX:XX:XX</li>
          <li>
            <div>担当者:●●</div>
            <button>担当者を変更</button>
          </li>
        </ul>
        <p>ここにグラフを描画</p>
      </React.Fragment>
    );
  }
}

export default Details;