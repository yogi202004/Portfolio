/** Fixed ambient layer: masked grid, two slow emerald glows and fine grain. */
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="animate-drift absolute -top-48 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-accent-deep/20 blur-[140px]" />
      <div className="animate-drift-slow absolute top-[60%] -right-40 h-[28rem] w-[28rem] rounded-full bg-accent/[0.06] blur-[120px]" />
      <div className="bg-noise absolute inset-0" />
    </div>
  );
}
