import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const data = [
  { symbol: 'BTC/USDT', price: 67842.12, change: 2.45, volume: '12.4B' },
  { symbol: 'ETH/USDT', price: 3450.91, change: -1.12, volume: '6.8B' },
  { symbol: 'SOL/USDT', price: 158.33, change: 4.31, volume: '2.2B' },
  { symbol: 'XRP/USDT', price: 0.74, change: 0.85, volume: '1.4B' },
  { symbol: 'ARB/USDT', price: 1.23, change: -3.12, volume: '860M' },
];

export default function Markets() {
  return (
    <section id="markets" className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
              Trending markets
            </h2>
            <p className="mt-3 text-white/70">Live pricing with a sleek, professional feel.</p>
          </div>
          <div className="hidden sm:block text-sm text-white/60">24h view</div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-12 bg-white/[0.03] px-4 py-3 text-xs font-medium text-white/70">
            <div className="col-span-4 sm:col-span-3">Pair</div>
            <div className="col-span-3">Price</div>
            <div className="col-span-3">24h Change</div>
            <div className="col-span-2 sm:col-span-3">24h Volume</div>
          </div>
          <ul className="divide-y divide-white/10 bg-black/40">
            {data.map((row) => {
              const positive = row.change >= 0;
              return (
                <li key={row.symbol} className="grid grid-cols-12 items-center px-4 py-4 text-sm text-white/90 hover:bg-white/[0.03]">
                  <div className="col-span-4 sm:col-span-3 font-medium">{row.symbol}</div>
                  <div className="col-span-3 tabular-nums">{row.price.toLocaleString()}</div>
                  <div className={`col-span-3 inline-flex items-center gap-1 tabular-nums ${positive ? 'text-emerald-400' : 'text-red-400'}`}>
                    {positive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />} {Math.abs(row.change).toFixed(2)}%
                  </div>
                  <div className="col-span-2 sm:col-span-3 tabular-nums text-white/70">{row.volume}</div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-white">Advanced charting, order types, and APIs</h3>
            <p className="text-sm text-white/70">Deploy strategies with precision or automate via WebSockets and REST.</p>
          </div>
          <div className="flex gap-3">
            <button className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 transition">Explore Docs</button>
            <button className="rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500 px-4 py-2 font-medium text-black">Open Account</button>
          </div>
        </div>
      </div>
    </section>
  );
}
