const InstagramMessageScreen = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-200 dark:border-zinc-700">
        <span className="font-semibold">chat_user</span>
        <span className="text-blue-500 text-xs font-medium">Instagram</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-xl max-w-[75%]">
          Hey! How’s it going?
        </div>
        <div className="bg-blue-500 text-white p-2 rounded-xl max-w-[75%] ml-auto">
          All good! You?
        </div>
        <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-xl max-w-[75%]">
          Pretty chill. Wanna hang out later?
        </div>
        <div className="bg-blue-500 text-white p-2 rounded-xl max-w-[75%] ml-auto">
          Yep, let’s do it!
        </div>
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