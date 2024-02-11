import styles from '../styles/Chatbot.module.css';

function Chatbot() {


  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.welcomeMessage}>Welcome to the TritonHealthBot! Please ask me any questions about UCSD health resources!</div>
      <div className={styles.trendingTopics}>
        <button className={styles.topicButton}>Counseling</button>
        <button className={styles.topicButton}>Workshops</button>
        <button className={styles.topicButton}>Anxiety</button>
      </div>
    </div>
  );
}

export default Chatbot;

