'use client'
import { useChatStore } from "@/store"
import { ChatMessage } from "@/types"
import { useEffect, useRef, useState } from "react"
import { Card } from "../ui/card"



// ─── Typing Indicator ─────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="flex gap-1 items-center py-1">
      {[0, 0.2, 0.4].map((delay, i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full bg-ink3"
          style={{ animation: `typingBounce 1.2s ${delay}s infinite` }}
        />
      ))}
    </div>
  )
}


// ─── Message Bubble ───────────────────────────────────────────
function MessageBubble({ msg }: { msg: ChatMessage }) {
  const isAI = msg.role === 'ai'
  return (
    <div className={`flex gap-2.5 max-w-[85%] ${isAI ? '' : 'ml-auto flex-row-reverse'}`}>
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0 ${isAI ? 'bg-orange-soft' : 'bg-blue-soft'}`}>
        {isAI ? '🤖' : '👤'}
      </div>
      <div>
        <div
          className={`px-4 py-3 rounded-xl text-sm leading-relaxed whitespace-pre-line
            ${isAI ? 'bg-bg border border-border text-ink rounded-tl-sm' : 'bg-orange text-white rounded-tr-sm'}`}
        >
          {msg.text}
        </div>
        {msg.source && (
          <div className="mt-2 px-2.5 py-1.5 bg-blue-soft rounded-lg text-xs text-blue-eduai font-medium flex items-center gap-1.5">
            📖 Source: {msg.source}
          </div>
        )}
      </div>
    </div>
  )
}


// ─── Chat Messages List ───────────────────────────────────────
export function ChatMessages() {
  const { messages, isTyping } = useChatStore()
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, isTyping])

  return (
    <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-4">
      {messages.map((msg, i) => <MessageBubble key={i} msg={msg} />)}
      {isTyping && (
        <div className="flex gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-orange-soft flex items-center justify-center">🤖</div>
          <div className="px-4 py-3 bg-bg border border-border rounded-xl rounded-tl-sm">
            <TypingIndicator />
          </div>
        </div>
      )}
      <div ref={endRef} />
    </div>
  )
}


// ─── Chat Input ───────────────────────────────────────────────
export function ChatInput() {
  const [input, setInput] = useState('')
  const { addMessage, setTyping, clearChat } = useChatStore()

  const send = async () => {
    if (!input.trim()) return
    const userMsg: ChatMessage = { role: 'user', text: input }
    addMessage(userMsg)
    setInput('')
    setTyping(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })
      const data = await res.json()
      addMessage({ role: 'ai', text: data.answer, source: data.source })
    } catch {
      addMessage({ role: 'ai', text: 'Sorry, I encountered an error. Please try again.', source: null })
    } finally {
      setTyping(false)
    }
  }

  return (
    <div className="px-5 py-4 border-t border-border">
      <div className="flex items-end gap-2.5 bg-bg border border-border rounded-xl px-3.5 py-2.5 focus-within:border-orange transition-colors">
        <textarea
          className="flex-1 bg-transparent border-none outline-none text-sm font-dm text-ink resize-none max-h-20 leading-relaxed placeholder:text-ink3"
          placeholder="Ask anything about NEET, CBSE, or any concept..."
          value={input}
          rows={1}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
        />
        <button
          onClick={send}
          className="w-9 h-9 rounded-lg bg-orange text-white flex items-center justify-center flex-shrink-0 hover:bg-orange-700 transition-colors"
        >
          ➤
        </button>
      </div>
      <p className="text-center text-[11px] text-ink3 mt-2">Answers sourced from NCERT · NEET PYQs · Curated study material</p>
    </div>
  )
}


// ─── Chat Sidebar Panel ───────────────────────────────────────
export function ChatSidebar({ onTopicSelect }: { onTopicSelect: (t: string) => void }) {
  const { clearChat } = useChatStore()
  const topics = ['Photosynthesis', 'Cell Division', 'Genetics', 'Organic Chemistry', "Newton's Laws", 'Human Physiology', 'Acids & Bases', 'Thermodynamics']
  const suggested = [
    'What is the difference between mitosis and meiosis?',
    "Explain Newton's 3rd Law with examples",
    'What are the products of the Krebs cycle?',
    'How to balance chemical equations?',
  ]

  return (
    <div className="flex flex-col gap-3 overflow-y-auto">
      <Card className="px-3 py-3">
        <div className="text-sm font-semibold text-ink mb-3">📌 Quick Topics</div>
        <div>{topics.map((t) => (
          <span
            key={t}
            onClick={() => onTopicSelect(`Explain ${t} for NEET`)}
            className="inline-block px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer border border-border bg-bg text-ink2 mr-1.5 mb-1.5 hover:bg-orange-soft hover:border-orange hover:text-orange transition-all"
          >{t}</span>
        ))}</div>
      </Card>
      <Card className="px-3 py-3">
        <div className="text-sm font-semibold text-ink mb-3">💡 Suggested Questions</div>
        {suggested.map((q) => (
          <div
            key={q}
            onClick={() => onTopicSelect(q)}
            className="text-[13px] text-ink2 py-2 border-b border-border last:border-none cursor-pointer leading-snug hover:text-orange transition-colors"
          >{q}</div>
        ))}
      </Card>
      <Card className="flex justify-between items-center py-3 cursor-pointer hover:bg-bg2 transition-colors" onClick={clearChat}>
        <span className="text-sm text-ink2">🗑 Clear chat history</span>
      </Card>
    </div>
  )
}