import styles from '../styles/Chatbot.module.css';
import TrendingTopic from './TrendingTopic';
import icon from '../media/img/icon.png'

function Chatbot() {


  return (
    <div className={styles.chatbotContainer}>
      <img src={icon} alt="Icon" />
      <div className={styles.welcomeMessage}>Welcome to the TritonHealthBot! Please ask me any questions about UCSD health resources!</div>
      <h3>Trending Topics</h3>
      <TrendingTopic />
    </div>
  );
}

export default Chatbot;

