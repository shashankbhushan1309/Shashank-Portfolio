export function NeonGrid() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-pink-500 to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-green-500 to-transparent"></div>

      <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl"></div>
      <div className="absolute top-3/4 right-1/4 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 h-32 w-32 rounded-full bg-pink-500/20 blur-3xl"></div>
      <div className="absolute top-1/2 right-1/3 h-32 w-32 rounded-full bg-green-500/20 blur-3xl"></div>
    </div>
  )
}
