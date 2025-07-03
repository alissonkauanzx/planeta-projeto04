export default function NotFound() {
  return (
    <div style={{ padding: 32, textAlign: 'center', color: '#555' }}>
      <h2>Página não encontrada</h2>
      <p>A página que você procura não existe ou foi removida.</p>
      <a href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>Voltar para a Home</a>
    </div>
  );
}
