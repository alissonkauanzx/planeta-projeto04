import "./globals.css";
import OptimizedSpacesBackground from "./components/background/OptimizedSpacesBackground";
import PlanetaProjeto from "./page";

export default function RootLayout() {
  return (
    <html lang="pt-BR">
      <body>
        <OptimizedSpacesBackground />
        <PlanetaProjeto />
      </body>
    </html>
  );
}
