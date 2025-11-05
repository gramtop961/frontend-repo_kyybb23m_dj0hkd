import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Markets from './components/Markets';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Markets />
      </main>
      <footer className="border-t border-white/10 bg-black/60 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/60">© {new Date().getFullYear()} FlareX Exchange. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-white/60">
              <a href="#" className="hover:text-white">Status</a>
              <a href="#" className="hover:text-white">Legal</a>
              <a href="#" className="hover:text-white">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
