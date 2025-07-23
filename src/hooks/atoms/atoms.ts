// hooks/atoms.ts
import { atom } from 'jotai';
import type { MessageType } from '@/types';

// 1. Counter Atom
export const counterAtom = atom(0);

// 2. Message Atom
export const messageAtom = atom<MessageType[]>([
  {
    id: "1",
    content: "Hello, how are you?",
    sender: "them",
    sent: "2024-01-01T00:00:00.000Z",
  },
]);

// 3. Social Media Atom
export const socialMediaAtom = atom("instagram");

// 4. Mock Type Atom
export const mockTypeAtom = atom("message");

// 5. Username Atom
export const usernameAtom = atom("");
