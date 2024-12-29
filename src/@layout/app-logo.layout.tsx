export default function AppLogo({ fontSize = 'text-4xl' }: { fontSize?: string }) {
  return (
    <div className={`${fontSize} font-bold leading-none`}>
      <span className="text-amber-500">schoo</span>
      <span className="text-blue-500">ger</span>
    </div>
  )
}