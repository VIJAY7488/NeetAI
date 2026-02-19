export function SectionTitle({ children, action }: { children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-fraunces text-lg font-semibold text-ink">{children}</h3>
      {action}
    </div>
  )
}