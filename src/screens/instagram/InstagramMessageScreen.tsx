// InstagramMessageScreen.tsx
import { messageAtom } from "@/hooks/atoms/atoms";
import { useAtom } from "jotai";


const InstagramMessageScreen = () => {
  const [messages] = useAtom(messageAtom);
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <span className="font-semibold">chat_user</span>
        <span className="text-blue-500 text-xs font-medium">Instagram</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        {Array.isArray(messages) && messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-[75%] px-4 py-2 rounded-lg text-sm ${
              message.sender === "you"
                ? "ml-auto bg-blue-600 text-white"
                : "mr-auto bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white"
            }`}
          >
            {message.content}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 p-2 border-t border-zinc-200 dark:border-zinc-700">
        <input
          type="text"
          placeholder="Message..."
          className="flex-1 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white outline-none"
        />
        <button className="text-blue-500 font-medium text-sm">Send</button>
      </div>
    </div>
  );
};

export default InstagramMessageScreen;
