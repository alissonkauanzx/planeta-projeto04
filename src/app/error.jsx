'use client';
export default function Error({ error, reset }) {
  return (
    <div style={{ padding: 32, textAlign: 'center', color: 'red' }}>
      <h2>Erro ao carregar tela</h2>
      <p>Ocorreu um erro inesperado. Tente recarregar a página.</p>
      <button onClick={reset} style={{ marginTop: 16, padding: 8 }}>
        Recarregar
      </button>
    </div>
  );
}
