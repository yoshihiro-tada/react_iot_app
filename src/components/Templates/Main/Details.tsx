import React from 'react';
import styles from './Details.module.css';

class Details extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>機器情報 詳細</h2>
        <ul>
          <li>機器番号:001</li>
          <li>継続[稼働/停止]時間:XX:XX:XX</li>
          <li>担当者:●●</li>
        </ul>
        <p>ここにグラフを描画</p>
      </React.Fragment>
    );
  }
}

export default Details;