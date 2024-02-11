import { useState } from 'react';
import styles from '../styles/Chatbot.module.css';

function Message() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    // Logic to handle the submission of the question
    // This could be an API call or some other action
    console.log('Submitted:', inputValue);
    // Reset input after submit
    setInputValue('');
  };

	return (
		<div>
			<input
        		className={styles.inputField}
		        type="text"
		        value={inputValue}
		        onChange={handleInputChange}
		        placeholder="How can I make an appointment with CAPS?"
		      />
      		<button className={styles.sendButton} onClick={handleSubmit}>Send</button>
		</div>
	);
}

export default Message;
