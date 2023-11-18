import styles from './NotFound.module.css';

/*MUI*/
import Button from '@mui/material/Button';

const NotFound = () => (
  <>
    <h2>ページが見つかりませんでした</h2>
    <div className={styles.back_to_top}>
      <a href="/"><Button variant="contained" size="small" sx={{fontSize: 12}}>TOPに戻る</Button></a>
    </div>
  </>
);

export default NotFound;