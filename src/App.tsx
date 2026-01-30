import { Cursor } from './components/Cursor';
import { Header } from './components/Header';
import { Ticker } from './components/Ticker';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen w-screen md:h-screen bg-stock-bg text-stock-text flex flex-col md:overflow-hidden font-sans selection:bg-stock-warm selection:text-black">
      <Cursor />
      <Header />
      <Ticker />
      <main className="flex-1 relative flex flex-col md:block md:min-h-0">
        <Dashboard />
      </main>

      {/* Background Grid Effect */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}

export default App;
