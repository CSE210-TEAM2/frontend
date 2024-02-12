import styles from '../styles/Header.module.css';
import bot from '../media/img/bot.png'

function Header() {
  return (
    <div className={styles.header}>
      <img src={bot} alt="Bot" />
      <div className={styles.logo}>TritonHealthBot</div>
    </div>
  );
}

export default Header;

