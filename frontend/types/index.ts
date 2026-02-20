



// ─── Chat ──────────────────────────────────────────────────────────────────────
export interface ChatMessage {
  role: 'user' | 'ai'
  text: string
  source?: string | null
  timestamp?: Date
}