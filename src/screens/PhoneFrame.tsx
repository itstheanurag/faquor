import React from "react";

export type PhoneType = "iphone" | "android" | "classic";

interface PhoneFrameProps {
  children: React.ReactNode;
  phoneType?: PhoneType;
}

export const PhoneFrame = ({ children, phoneType }: PhoneFrameProps) => {
  const getFrameStyles = () => {
    switch (phoneType) {
      case "iphone":
        return {
          frame:
            "bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 rounded-[3rem] p-2 shadow-2xl",
          screen:
            "bg-white dark:bg-zinc-900 text-black dark:text-white rounded-[2.5rem] overflow-hidden relative flex flex-col",
          notch:
            "absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-zinc-300 dark:bg-zinc-800 rounded-b-2xl z-20",
          homeIndicator:
            "absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-zinc-400/30 dark:bg-white/30 rounded-full",
        };
      case "android":
        return {
          frame:
            "bg-gradient-to-br from-zinc-300 to-zinc-400 dark:from-zinc-700 dark:to-zinc-800 rounded-[2rem] p-2 shadow-2xl",
          screen:
            "bg-white dark:bg-zinc-900 text-black dark:text-white rounded-[1.5rem] overflow-hidden relative flex flex-col",
          notch: "",
          homeIndicator:
            "absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 border-2 border-zinc-500/40 dark:border-white/30 rounded-full",
        };
      default:
        return {
          frame:
            "bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 rounded-[3rem] p-2 shadow-2xl",
          screen:
            "bg-white dark:bg-zinc-900 text-black dark:text-white rounded-[2.5rem] overflow-hidden relative flex flex-col",
          notch:
            "absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-zinc-300 dark:bg-zinc-800 rounded-b-2xl z-20",
          homeIndicator:
            "absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-zinc-400/30 dark:bg-white/30 rounded-full",
        };
    }
  };

  const styles = getFrameStyles();

  return (
    <div className="flex justify-center items-center min-h-[600px]">
      <div className={`w-80 h-[650px] ${styles.frame}`}>
        <div className={`w-full h-full ${styles.screen}`}>
          {styles.notch && <div className={styles.notch} />}

          {/* Status Bar */}
          <div className="relative z-10 flex justify-between items-center px-4 py-1 text-xs text-black dark:text-white">
            <span className="font-medium">9:41</span>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-2.5 bg-black dark:bg-white rounded-sm" />
              <div className="w-3 h-2.5 border border-black dark:border-white rounded-sm" />
              <div className="w-4 h-2 rounded-sm bg-green-500" />
            </div>
          </div>

          {/* Safe Area */}
          <div className="flex-1 px-4 pt-2 pb-8 overflow-auto relative z-0">
            {children}
          </div>

          {styles.homeIndicator && <div className={styles.homeIndicator} />}
        </div>
      </div>
    </div>
  );
};
