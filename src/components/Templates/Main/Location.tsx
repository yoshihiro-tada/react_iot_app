import styles from './Location.module.css';

/*MUI Icon*/
import SquareIcon from '@mui/icons-material/Square';

const Location = () => (
  <>
    <h2>ロケーション</h2>
    <p className={styles.introduce}>機械場の編み機の稼働状況が一覧で確認できます。</p>
    <h3>凡例</h3>
    <div className={styles.ex_box_flex}>
      <SquareIcon color="success" fontSize="large" />
      <p>:稼働中</p>
    </div>
    <div className={styles.ex_box_flex}>
      <SquareIcon color="error" fontSize="large" />
      <p>:停止中</p>
    </div>
    <div className={styles.location_wrap_box}>
      <div className={styles.rows_flex}>
        <SquareIcon fontSize="large" />
        <SquareIcon fontSize="large" />
        <SquareIcon fontSize="large" />
        <SquareIcon fontSize="large" />
      </div>
    </div>
  </>
);

export default Location;