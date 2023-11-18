import styles from './Details.module.css';

/*MUI*/
import Button from '@mui/material/Button';

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
            <Button variant="contained" size="small" sx={{fontSize: 12}}>担当者を変更</Button>
          </li>
        </ul>
        <p>ここにグラフを描画</p>
      </React.Fragment>
    );
  }
}

export default Details;