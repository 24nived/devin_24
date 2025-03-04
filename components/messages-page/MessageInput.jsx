import { useState } from 'react';

const MessageInput = ({ sendMessage }) => {
  const [text, setText] = useState('');

  return (
    <form
      className="p-2 bg-gray-100"
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(text);
        setText('');
      }}
    >
      <input
        className="w-full rounded-lg border-purple-700 border focus:ring-purple-900 focus:border-purple-900"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Send a message..."
      />
    </form>
  );
};

export default MessageInput;
