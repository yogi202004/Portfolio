/**
 * A small, decorative rendering of a ReAct-style agent graph:
 * __start__ → chat ⇄ tools, chat → __end__.
 */
export function AgentGraph({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl border border-line-strong bg-surface/85 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl lg:rounded-2xl lg:p-4 ${className}`}
      role="img"
      aria-label="Diagram of an agent graph: start, a chat node that loops with a tool node, then end"
    >
      <div className="mb-2 flex items-center justify-between font-mono text-[8px] tracking-wider lg:mb-3 lg:text-[10px] text-subtle uppercase">
        <span>agent.graph</span>
        <span className="flex items-center gap-1.5 text-accent">
          <span className="animate-pulse-dot size-1.5 rounded-full bg-accent" />
          running
        </span>
      </div>
      <svg viewBox="0 0 220 120" className="w-full" aria-hidden>
        <defs>
          <marker id="arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="#4fd1a1" fillOpacity="0.7" />
          </marker>
        </defs>
        {/* edges */}
        <g stroke="#4fd1a1" strokeOpacity="0.55" strokeWidth="1.2" fill="none">
          <path className="animate-flow" d="M42 60 H78" markerEnd="url(#arrow)" />
          <path className="animate-flow" d="M120 50 C138 26, 160 26, 168 40" markerEnd="url(#arrow)" />
          <path className="animate-flow" d="M168 80 C160 94, 138 94, 120 72" markerEnd="url(#arrow)" />
          <path className="animate-flow" d="M100 76 V100" markerEnd="url(#arrow)" />
        </g>
        {/* nodes */}
        <g fontFamily="var(--font-geist-mono), monospace" fontSize="8" textAnchor="middle">
          <rect x="4" y="51" width="38" height="18" rx="9" fill="#121815" stroke="rgba(255,255,255,0.14)" />
          <text x="23" y="62.5" fill="#9aa6a0">start</text>

          <rect x="80" y="44" width="40" height="32" rx="8" fill="#0f2a20" stroke="#4fd1a1" strokeOpacity="0.7" />
          <text x="100" y="63" fill="#e9eeeb">chat</text>

          <rect x="158" y="44" width="56" height="32" rx="8" fill="#121815" stroke="rgba(255,255,255,0.14)" />
          <text x="186" y="63" fill="#e9eeeb">tools</text>

          <rect x="82" y="102" width="36" height="16" rx="8" fill="#121815" stroke="rgba(255,255,255,0.14)" />
          <text x="100" y="112.5" fill="#9aa6a0">end</text>
        </g>
        <text x="146" y="22" fontFamily="var(--font-geist-mono), monospace" fontSize="7" fill="#6b7570" textAnchor="middle">
          tool_call
        </text>
      </svg>
    </div>
  );
}
