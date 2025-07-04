
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#1e1b4b] flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8 flex flex-col items-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-4xl shadow-lg">
            🚀
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
            Meu Projeto Espacial
          </h1>
          <p className="text-lg text-slate-200 text-center max-w-md">
            Bem-vindo ao universo de ideias! Compartilhe, explore e inspire-se com projetos inovadores do espaço educacional e tecnológico.
          </p>
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="bg-white/5 rounded-xl p-6 flex flex-col gap-2 border border-white/10">
            <h2 className="text-2xl font-semibold text-white">🔭 Destaque: Sistema Solar Interativo</h2>
            <p className="text-slate-200">
              Projeto educacional sobre o sistema solar com realidade aumentada para estudantes do ensino médio.
            </p>
            <div className="flex gap-2 mt-2">
              <span className="bg-blue-500/80 text-white text-xs px-3 py-1 rounded-full">Educação</span>
              <span className="bg-purple-500/80 text-white text-xs px-3 py-1 rounded-full">ODS 4</span>
              <span className="bg-orange-500/80 text-white text-xs px-3 py-1 rounded-full">ODS 9</span>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-6 flex flex-col gap-2 border border-white/10">
            <h2 className="text-2xl font-semibold text-white">🤖 Robô Explorador Espacial</h2>
            <p className="text-slate-200">
              Desenvolvimento de um robô autônomo para exploração de terrenos simulando Marte.
            </p>
            <div className="flex gap-2 mt-2">
              <span className="bg-blue-500/80 text-white text-xs px-3 py-1 rounded-full">Tecnologia</span>
              <span className="bg-orange-500/80 text-white text-xs px-3 py-1 rounded-full">ODS 9</span>
              <span className="bg-yellow-500/80 text-white text-xs px-3 py-1 rounded-full">ODS 11</span>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-6 flex flex-col gap-2 border border-white/10">
            <h2 className="text-2xl font-semibold text-white">🌦️ Estação Meteorológica Espacial</h2>
            <p className="text-slate-200">
              Monitoramento climático usando sensores avançados e comunicação via satélite.
            </p>
            <div className="flex gap-2 mt-2">
              <span className="bg-green-500/80 text-white text-xs px-3 py-1 rounded-full">Ciência</span>
              <span className="bg-green-700/80 text-white text-xs px-3 py-1 rounded-full">ODS 13</span>
              <span className="bg-blue-700/80 text-white text-xs px-3 py-1 rounded-full">ODS 14</span>
            </div>
          </div>
        </div>
        <footer className="mt-12 text-slate-400 text-sm text-center w-full">
          &copy; 2025 Meu Projeto Espacial – Inspirando o futuro juntos.
        </footer>
      </div>
    </main>
  );
}