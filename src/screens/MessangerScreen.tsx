// screens/MessengerScreen.tsx
import React, { useState } from 'react';

type Props = {
  image: string | null;
};

type Message = {
  fromMe: boolean;
  text: string;
};

export default function MessengerScreen({ image }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [fromMe, setFromMe] = useState(true);

  const addMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, fromMe }]);
    setInput('');
  };

  return (
    <div className="p-4 border rounded bg-blue-50">
      <h2 className="text-xl font-semibold mb-2">Messenger Screen</h2>
      {image && <img src={image} alt="Uploaded" className="max-w-full rounded mb-4" />}

      <div className="space-y-2 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs px-4 py-2 rounded-lg text-white ${
              msg.fromMe ? 'bg-blue-500 self-end ml-auto' : 'bg-gray-500 self-start mr-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Type a message"
        />
        <select
          value={fromMe ? 'me' : 'them'}
          onChange={(e) => setFromMe(e.target.value === 'me')}
          className="p-2 border rounded"
        >
          <option value="me">Me</option>
          <option value="them">Them</option>
        </select>
        <button
          onClick={addMessage}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}