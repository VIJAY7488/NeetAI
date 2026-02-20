'use client'

import { ChatInput, ChatMessages, ChatSidebar } from "@/components/chat"


export default function ChatPage() {
  const handleTopicSelect = (_topic: string) => {}

  return (
    <div className="p-5 h-[calc(100vh-60px)] overflow-hidden">
      <div className="grid grid-cols-[260px_1fr] gap-5 h-full">
        <ChatSidebar onTopicSelect={handleTopicSelect} />
        <div className="flex flex-col bg-panel border border-border rounded-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
            <div className="w-9 h-9 rounded-xl bg-orange flex items-center justify-center text-lg">🤖</div>
            <div>
              <div className="text-sm font-semibold text-ink">VidyAI Assistant</div>
              <div className="text-xs text-green-eduai flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-eduai" />
                Online · Trained on NCERT + NEET PYQs
              </div>
            </div>
          </div>
          <ChatMessages />
          <ChatInput />
        </div>
      </div>
    </div>
  )
}
