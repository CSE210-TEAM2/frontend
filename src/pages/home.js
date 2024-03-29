import Header from '../components/Header';
import Chatbot from '../components/Chatbot';
import Message from '../components/Message';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
    <Header />
	  <Chatbot />
	  <Message />
    </div>
  );
}

