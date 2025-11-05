import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[76vh] flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
            <Shield className="h-3.5 w-3.5 text-cyan-300" />
            Institutional-grade security
          </div>

          <h1 className="mt-6 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-6xl">
            Trade crypto with confidence
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            A modern, lightning-fast exchange with deep liquidity, low fees, and beautiful UX.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a href="#markets" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500 px-6 py-3 font-medium text-black">
              Start trading <ArrowRight className="h-4 w-4" />
            </a>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition">
              <Zap className="h-4 w-4 text-yellow-300" /> View pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
