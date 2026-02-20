import { ChatMessage } from "@/types"
import { create } from "zustand"









// ─── Chat Store ───────────────────────────────────────────────────────────────
interface ChatStore {
    messages: ChatMessage[],
    isTyping: boolean
    addMessage: (msg: ChatMessage) => void,
    setTyping: (val: boolean) => void,
    clearChat: () => void
}


export const useChatStore = create<ChatStore> ((set) => ({
    messages: [
        {
            role: 'ai',
            text: "Hello! I'm VidyAI — your personal NEET & CBSE tutor. Ask me anything about Biology, Chemistry, Physics, or any exam topic. 📚",
            source: null,
        },
    ],
    isTyping: false,
    addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),
    setTyping: (val) => set({ isTyping: val }),
    clearChat: () => set({ 
        messages: [
            {
                role: 'ai',
                text: "Chat cleared! What would you like to study today?",
                source: null,
            }
        ]
    }),
}))