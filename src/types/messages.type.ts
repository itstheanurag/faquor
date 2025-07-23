type sender = "them" | "you";

type UsernameType = string;

type MessageType = {
  id: string;
  content: string;
  sender: sender;
  sent: string;
};

export type { MessageType, UsernameType };