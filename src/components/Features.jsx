import { Shield, Zap, LineChart, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Bank-grade security',
    desc: 'Cold storage by default, multi-sig wallets, advanced risk controls, and 24/7 monitoring.'
  },
  {
    icon: Zap,
    title: 'Ultra-low latency',
    desc: 'A matching engine optimized for speed and reliability, even at peak market volatility.'
  },
  {
    icon: LineChart,
    title: 'Deep liquidity',
    desc: 'Tight spreads and high throughput across majors and long-tail assets with smart routing.'
  },
  {
    icon: Globe,
    title: 'Global access',
    desc: 'Regulatory-first approach with localized experiences and 24/7 multilingual support.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            Built for serious traders
          </h2>
          <p className="mt-3 text-white/70">
            Clean, modern, and polished — everything you need to execute with precision.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 transition hover:border-white/20">
              <div className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(120px 60px at 20% 10%, rgba(99,102,241,0.35), transparent 60%)'}} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-white/10 p-2 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
