import { Paperclip, Image, Send } from "lucide-react";
const MessageBubble = ({
  text,
  sent,
}: {
  text: string;
  sent?: boolean;
}) => (
  <div
    className={`max-w-[75%] px-4 py-2 rounded-lg text-sm ${
      sent
        ? "ml-auto bg-blue-600 text-white"
        : "mr-auto bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white"
    }`}
  >
    {text}
  </div>
);

const LinkedInMessageScreen = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-200 dark:border-zinc-700">
        <div>
          <p className="font-semibold text-base">Alex Johnson</p>
          <p className="text-xs text-muted-foreground">Active now</p>
        </div>
        <img
          src="https://placehold.co/32x32"
          alt="avatar"
          className="rounded-full"
        />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        <MessageBubble text="Hi Alex, I saw your recent post about backend engineering." />
        <MessageBubble text="Thanks! I'm happy to chat more." sent />
        <MessageBubble text="Are you open to new roles? I have an exciting opportunity." />
        <MessageBubble text="That sounds great. Can you share more details?" sent />
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 px-2 py-2 border-t border-zinc-200 dark:border-zinc-700">
        <button className="text-zinc-500 dark:text-zinc-400">
          <Paperclip size={18} />
        </button>
        <button className="text-zinc-500 dark:text-zinc-400">
          <Image size={18} />
        </button>
        <input
          type="text"
          placeholder="Write a message..."
          className="flex-1 px-3 py-1.5 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white outline-none"
        />
        <button className="text-blue-600 dark:text-blue-500">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default LinkedInMessageScreen;
