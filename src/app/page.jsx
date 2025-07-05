ch"use client";

import { upload } from "@vercel/blob/client";
import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Textarea } from "../components/ui/textarea";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import {
  SpaceIcon as Planet,
  Plus,
  Search,
  Eye,
  MessageCircle,
  Edit,
  Trash2,
  UploadIcon,
  ImageIcon,
  Video,
  Calendar,
  X,
  Send,
  LogOut,
  Star,
  FileText,
  Shield,
  Zap,
  Sparkles,
} from "lucide-react";

// Componente de fundo espacial OTIMIZADO para performance
const OptimizedSpaceBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePosition({
            x: (e.clientX / window.innerWidth) * 100,
            y: (e.clientY / window.innerHeight) * 100,
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradiente base espacial - estático para performance */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 20%, rgba(30, 41, 59, 0.9) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(67, 56, 202, 0.8) 0%, transparent 50%),
            linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)
          `,
        }}
      />

      {/* Buraco Negro Simplificado */}
      <div
        className="absolute opacity-80"
        style={{
          top: "15%",
          right: "10%",
          width: "200px",
          height: "200px",
          background: `
            radial-gradient(circle at center,
              transparent 30%,
              rgba(139, 92, 246, 0.2) 40%,
              rgba(59, 130, 246, 0.3) 50%,
              rgba(30, 41, 59, 0.8) 70%,
              transparent 90%
            )
          `,
          borderRadius: "50%",
          willChange: "transform",
          animation: "simpleRotate 20s linear infinite",
        }}
      >
        {/* Centro do buraco negro */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: "40px",
            height: "40px",
            background: "radial-gradient(circle, #000000 0%, rgba(0,0,0,0.8) 80%, transparent 100%)",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Nebulosa Otimizada */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse 600px 300px at 30% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 60%),
            radial-gradient(ellipse 400px 200px at 70% 30%, rgba(59, 130, 246, 0.25) 0%, transparent 60%)
          `,
          willChange: "transform",
          animation: "gentleFloat 30s ease-in-out infinite alternate",
          transform: \`translate3d(\${mousePosition.x * 0.01}px, \${mousePosition.y * 0.01}px, 0)\`,
        }}
      />

      {/* Campo de Estrelas Reduzido - 50 estrelas em vez de 200 */}
      {[...Array(50)].map((_, i) => {
        const size = Math.random() * 2 + 1;
        const brightness = Math.random() * 0.8 + 0.2;
        const delay = Math.random() * 5;

        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: \`\${Math.random() * 100}%\`,
              top: \`\${Math.random() * 100}%\`,
              width: \`\${size}px\`,
              height: \`\${size}px\`,
              backgroundColor: "#ffffff",
              opacity: brightness,
              willChange: "opacity",
              animation: \`gentleTwinkle \${3 + Math.random() * 2}s ease-in-out infinite\`,
              animationDelay: \`\${delay}s\`,
            }}
          />
        );
      })}

      {/* Constelações Simplificadas */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{ pointerEvents: "none" }}>
        {/* Constelação simples */}
        <g opacity="0.6">
          <line x1="15%" y1="25%" x2="20%" y2="30%" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
          <line x1="20%" y1="30%" x2="25%" y2="25%" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
          <line x1="25%" y1="25%" x2="30%" y2="35%" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />

          <circle cx="15%" cy="25%" r="2" fill="rgba(255, 255, 255, 0.8)" />
          <circle cx="20%" cy="30%" r="3" fill="rgba(59, 130, 246, 0.8)" />
          <circle cx="25%" cy="25%" r="2" fill="rgba(255, 255, 255, 0.8)" />
          <circle cx="30%" cy="35%" r="2" fill="rgba(147, 51, 234, 0.8)" />
        </g>

        <g opacity="0.5">
          <line x1="70%" y1="20%" x2="75%" y2="15%" stroke="rgba(147, 51, 234, 0.5)" strokeWidth="1" />
          <line x1="75%" y1="15%" x2="80%" y2="25%" stroke="rgba(147, 51, 234, 0.5)" strokeWidth="1" />

          <circle cx="70%" cy="20%" r="2" fill="rgba(255, 255, 255, 0.7)" />
          <circle cx="75%" cy="15%" r="2" fill="rgba(147, 51, 234, 0.8)" />
          <circle cx="80%" cy="25%" r="2" fill="rgba(255, 255, 255, 0.7)" />
        </g>
      </svg>

      {/* Meteoro Único e Simples */}
      <div
        className="absolute opacity-60"
        style={{
          left: "10%",
          top: "20%",
          willChange: "transform",
          animation: "simpleMeteor 12s linear infinite",
        }}
      >
        <div
          className="w-1 h-20 bg-gradient-to-b from-white via-blue-300 to-transparent"
          style={{
            transform: "rotate(45deg)",
            filter: "blur(0.5px)",
          }}
        />
      </div>

      {/* Planetas Simplificados */}
      <div className="absolute inset-0">
        {/* Planeta Principal */}
        <div
          className="absolute top-32 left-16 w-32 h-32 rounded-full opacity-70"
          style={{
            background: `
              radial-gradient(circle at 30% 30%,
              #60a5fa 0%,
              #3b82f6 50%,
              #1e40af 100%
              )
            `,
            willChange: "transform",
            animation: "slowRotate 40s linear infinite",
          }}
        >
          {/* Anel simples */}
          <div
            className="absolute rounded-full border opacity-40"
            style={{
              width: "160%",
              height: "160%",
              top: "-30%",
              left: "-30%",
              borderColor: "rgba(59, 130, 246, 0.3)",
              borderWidth: "1px",
              transform: "rotateX(75deg)",
            }}
          />
        </div>

        {/* Planeta Menor */}
        <div
          className="absolute bottom-40 right-32 w-20 h-20 rounded-full opacity-60"
          style={{
            background: `
              radial-gradient(circle at 40% 40%,
              #f472b6 0%,
              #ec4899 50%,
              #be185d 100%
              )
            `,
            willChange: "transform",
            animation: "slowRotate 50s linear infinite reverse",
          }}
        />
      </div>

      {/* Partículas Cósmicas Reduzidas - 10 em vez de 30 */}
      {[...Array(10)].map((_, i) => (
        <div
          key={\`cosmic-\${i}\`}
          className="absolute rounded-full opacity-40"
          style={{
            left: \`\${Math.random() * 100}%\`,
            top: \`\${Math.random() * 100}%\`,
            width: \`\${Math.random() * 2 + 1}px\`,
            height: \`\${Math.random() * 2 + 1}px\`,
            backgroundColor: ["#60a5fa", "#a78bfa", "#f472b6"][Math.floor(Math.random() * 3)],
            willChange: "transform",
            animation: \`gentleFloat \${20 + Math.random() * 10}s ease-in-out infinite\`,
            animationDelay: \`\${Math.random() * 5}s\`,
          }}
        />
      ))}

      {/* Efeito de Paralaxe Otimizado */}
      <div
        className="absolute inset-0 opacity-10 transition-opacity duration-500"
        style={{
          background: \`
            radial-gradient(circle at \${mousePosition.x}% \${mousePosition.y}%,
            rgba(59, 130, 246, 0.2) 0%,
            transparent 50%
            )
          \`,
        }}
      />

      {/* CSS Animations Otimizadas */}
      <style jsx>{\`
        @keyframes simpleRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes slowRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes gentleFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(10px, -10px, 0) scale(1.05);
          }
        }

        @keyframes gentleTwinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }

        @keyframes simpleMeteor {
          0% {
            transform: translate3d(-50px, -50px, 0) rotate(45deg);
            opacity: 0;
          }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% {
            transform: translate3d(100vw, 100vh, 0) rotate(45deg);
            opacity: 0;
          }
        }

        /* Otimizações de performance */
        * {
          backface-visibility: hidden;
          perspective: 1000px;
        }
      \`}</style>
    </div>
  );
};

// Componente de Card Otimizado
const OptimizedCard = ({ children, className = "", onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={\`relative \${className} cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-2\`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        willChange: "transform",
      }}
    >
      {/* Efeito de borda simples */}
      {isHovered && (
        <div className="absolute inset-0 rounded-lg pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60" />
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60" />
          <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-60" />
          <div className="absolute right-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60" />
        </div>
      )}

      {children}
    </div>
  );
};

export default function PlanetaProjeto() {
  const [currentView, setCurrentView] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  // Usar useRef para evitar re-renderizações
  const loginEmailRef = useRef("");
  const loginPasswordRef = useRef("");
  const registerEmailRef = useRef("");
  const registerPasswordRef = useRef("");
  const [newComment, setNewComment] = useState("");

  // Dados mockados dos usuários e projetos
  const [users, setUsers] = useState([
    { id: 1, email: "admin@planeta.com", password: "123456", isAdmin: true },
    { id: 2, email: "user@planeta.com", password: "123456", isAdmin: false },
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Sistema Solar Interativo",
      description:
        "Projeto educacional sobre o sistema solar com realidade aumentada para estudantes do ensino médio",
      category: "Educação",
      author: "João Silva",
      authorId: 2,
      date: "2024-12-15",
      views: 245,
      ods: [4, 9],
      comments: [
        { id: 1, author: "Maria Santos", content: "Projeto incrível! Muito bem elaborado.", date: "2024-12-16" },
        {
          id: 2,
          author: "Pedro Costa",
          content: "Gostaria de saber mais sobre a implementação da RA.",
          date: "2024-12-16",
        },
      ],
      images: ["/placeholder.svg?height=300&width=400"],
      videos: [],
      pdfs: [],
      content:
        "Este projeto visa criar uma experiência imersiva de aprendizado sobre o sistema solar usando tecnologia de realidade aumentada. Os estudantes podem visualizar planetas em 3D e interagir com eles de forma educativa.",
    },
    {
      id: 2,
      title: "Robô Explorador Espacial",
      description: "Desenvolvimento de um robô autônomo para exploração de terrenos simulando Marte",
      category: "Tecnologia",
      author: "Maria Santos",
      authorId: 3,
      date: "2024-12-10",
      views: 189,
      ods: [9, 11],
      comments: [{ id: 3, author: "Ana Lima", content: "Que tecnologia impressionante!", date: "2024-12-11" }],
      images: ["/placeholder.svg?height=300&width=400"],
      videos: [],
      pdfs: [],
      content:
        "O objetivo deste projeto é desenvolver um robô autônomo capaz de navegar em terrenos rochosos e coletar amostras, simulando missões espaciais reais em Marte.",
    },
    {
      id: 3,
      title: "Estação Meteorológica Espacial",
      description: "Monitoramento climático usando sensores avançados e comunicação via satélite",
      category: "Ciência",
      author: "Pedro Costa",
      authorId: 4,
      date: "2024-12-05",
      views: 156,
      ods: [13, 14],
      comments: [],
      images: ["/placeholder.svg?height=300&width=400"],
      videos: [],
      pdfs: [],
      content:
        "Esta estação meteorológica utiliza tecnologia espacial para coletar dados climáticos em tempo real e transmiti-los via satélite para análise científica.",
    },
  ]);

  const odsOptions = [
    { id: 1, name: "Erradicação da Pobreza", color: "#E5243B" },
    { id: 2, name: "Fome Zero", color: "#DDA63A" },
    { id: 3, name: "Saúde e Bem-Estar", color: "#4C9F38" },
    { id: 4, name: "Educação de Qualidade", color: "#C5192D" },
    { id: 5, name: "Igualdade de Gênero", color: "#FF3A21" },
    { id: 6, name: "Água Potável e Saneamento", color: "#26BDE2" },
    { id: 7, name: "Energia Limpa e Acessível", color: "#FCC30B" },
    { id: 8, name: "Trabalho Decente", color: "#A21942" },
    { id: 9, name: "Inovação e Infraestrutura", color: "#FD6925" },
    { id: 10, name: "Redução das Desigualdades", color: "#DD1367" },
    { id: 11, name: "Cidades Sustentáveis", color: "#FD9D24" },
    { id: 12, name: "Consumo Responsável", color: "#BF8B2E" },
    { id: 13, name: "Ação Contra Mudança Climática", color: "#3F7E44" },
    { id: 14, name: "Vida na Água", color: "#0A97D9" },
    { id: 15, name: "Vida Terrestre", color: "#56C02B" },
    { id: 16, name: "Paz e Justiça", color: "#00689D" },
    { id: 17, name: "Parcerias", color: "#19486A" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || project.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", "Educação", "Tecnologia", "Ciência", "Sustentabilidade"];

  // Função para verificar se o usuário pode editar/deletar um projeto
  const canEditProject = (project) => {
    if (!currentUser) return false;
    return currentUser.isAdmin || currentUser.id === project.authorId;
  };

  // Funções de autenticação usando useCallback para evitar re-renderizações
  const handleLogin = useCallback(async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = users.find((u) => u.email === loginEmailRef.current && u.password === loginPasswordRef.current);
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
      setCurrentView("projects");
      loginEmailRef.current = "";
      loginPasswordRef.current = "";
    } else {
      alert("Email ou senha incorretos!");
    }
    setLoading(false);
  }, [users]);

  const handleRegister = useCallback(async () => {
    if (!registerEmailRef.current || !registerPasswordRef.current) {
      alert("Preencha todos os campos!");
      return;
    }

    if (users.find((u) => u.email === registerEmailRef.current)) {
      alert("Este email já está cadastrado!");
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newUser = {
      id: Date.now(),
      email: registerEmailRef.current,
      password: registerPasswordRef.current,
      isAdmin: false,
    };

    setUsers([...users, newUser]);
    alert("Conta criada com sucesso!");
    setCurrentView("login");
    registerEmailRef.current = "";
    registerPasswordRef.current = "";
    setLoading(false);
  }, [users]);

  const handleLogout = useCallback(() => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    setCurrentView("login");
  }, []);

  // Componente de Login ULTRA SIMPLES
  const LoginView = () => (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          padding: "30px",
          borderRadius: "15px",
          border: "1px solid rgba(59, 130, 246, 0.3)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 50px rgba(59, 130, 246, 0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              borderRadius: "50%",
              margin: "0 auto 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
            }}
          >
            🌎
          </div>
          <h1 style={{ color: "white", fontSize: "28px", margin: "0 0 10px 0", fontWeight: "bold" }}>
            Planeta Projeto
          </h1>
          <p style={{ color: "#94a3b8", margin: 0 }}>Entre na sua conta para explorar o cosmos</p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              color: "#e2e8f0",
              marginBottom: "8px",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="seu@email.com"
            defaultValue=""
            onChange={(e) => {
              loginEmailRef.current = e.target.value;
            }}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "rgba(51, 65, 85, 0.8)",
              border: "1px solid rgba(71, 85, 105, 0.8)",
              borderRadius: "8px",
              color: "white",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box",
              transition: "all 0.3s ease",
            }}
          />
        </div>

        <div style={{ marginBottom: "30px" }}>
          <label
            style={{
              display: "block",
              color: "#e2e8f0",
              marginBottom: "8px",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Senha
          </label>
          <input
            type="password"
            placeholder="••••••••"
            defaultValue=""
            onChange={(e) => {
              loginPasswordRef.current = e.target.value;
            }}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "rgba(51, 65, 85, 0.8)",
              border: "1px solid rgba(71, 85, 105, 0.8)",
              borderRadius: "8px",
              color: "white",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box",
              transition: "all 0.3s ease",
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            background: loading ? "#6b7280" : "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: loading ? "not-allowed" : "pointer",
            marginBottom: "20px",
            transition: "all 0.3s ease",
            boxShadow: loading ? "none" : "0 0 20px rgba(59, 130, 246, 0.3)",
          }}
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>

        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => setCurrentView("register")}
            style={{
              background: "none",
              border: "none",
              color: "#60a5fa",
              fontSize: "14px",
              cursor: "pointer",
              textDecoration: "underline",
              transition: "color 0.3s ease",
            }}
          >
            Não tem conta? Criar conta
          </button>
        </div>
      </div>
    </div>
  );

  // Componente de Registro ULTRA SIMPLES
  const RegisterView = () => (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          padding: "30px",
          borderRadius: "15px",
          border: "1px solid rgba(139, 92, 246, 0.3)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 50px rgba(139, 92, 246, 0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
              borderRadius: "50%",
              margin: "0 auto 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
            }}
          >
            👤
          </div>
          <h1 style={{ color: "white", fontSize: "28px", margin: "0 0 10px 0", fontWeight: "bold" }}>Criar Conta</h1>
          <p style={{ color: "#94a3b8", margin: 0 }}>Junte-se à nossa comunidade espacial</p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              color: "#e2e8f0",
              marginBottom: "8px",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="seu@email.com"
            defaultValue=""
            onChange={(e) => {
              registerEmailRef.current = e.target.value;
            }}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "rgba(51, 65, 85, 0.8)",
              border: "1px solid rgba(71, 85, 105, 0.8)",
              borderRadius: "8px",
              color: "white",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box",
              transition: "all 0.3s ease",
            }}
          />
        </div>

        <div style={{ marginBottom: "30px" }}>
          <label
            style={{
              display: "block",
              color: "#e2e8f0",
              marginBottom: "8px",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Senha
          </label>
          <input
            type="password"
            placeholder="••••••••"
            defaultValue=""
            onChange={(e) => {
              registerPasswordRef.current = e.target.value;
            }}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "rgba(51, 65, 85, 0.8)",
              border: "1px solid rgba(71, 85, 105, 0.8)",
              borderRadius: "8px",
              color: "white",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box",
              transition: "all 0.3s ease",
            }}
          />
        </div>

        <button
          onClick={handleRegister}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            background: loading ? "#6b7280" : "linear-gradient(135deg, #8b5cf6, #ec4899)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: loading ? "not-allowed" : "pointer",
            marginBottom: "20px",
            transition: "all 0.3s ease",
            boxShadow: loading ? "none" : "0 0 20px rgba(139, 92, 246, 0.3)",
          }}
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>

        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => setCurrentView("login")}
            style={{
              background: "none",
              border: "none",
              color: "#a78bfa",
              fontSize: "14px",
              cursor: "pointer",
              textDecoration: "underline",
              transition: "color 0.3s ease",
            }}
          >
            Já tem conta? Entrar
          </button>
        </div>
      </div>
    </div>
  );

  // Componente de Projetos com design futurístico
  const ProjectsView = () => (
    <div className="min-h-screen relative z-10">
      {/* Header Futurístico */}
      <header
        className="sticky top-0 z-50 relative overflow-hidden"
        style={{
          background: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(59, 130, 246, 0.3)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          minHeight: "80px", // Garantir altura mínima
        }}
      >
        {/* Efeito de energia no header */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              linear-gradient(90deg,
              transparent,
              rgba(59, 130, 246, 0.1),
              transparent
              )
            `,
          }}
        />

        <div className="container mx-auto px-4 py-4 relative">
          <div className="flex items-center justify-between min-h-[48px]">
            <div className="flex items-center gap-4">
              <div
                className="relative p-3 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                }}
              >
                <Planet className="h-8 w-8 text-white animate-spin" style={{ animationDuration: "10s" }} />

                {/* Partículas orbitais */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-300 rounded-full"
                    style={{
                      top: \`\${Math.sin((i * Math.PI) / 3) * 25 + 50}%\`,
                      left: \`\${Math.cos((i * Math.PI) / 3) * 25 + 50}%\`,
                      animation: \`orbit \${3 + i * 0.3}s linear infinite\`,
                      transformOrigin: "50% 50%",
                    }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-white">
                  Planeta Projeto{" "}
                  <span className="inline-block animate-pulse" style={{ animationDelay: "1s" }}>
                    🌎
                  </span>
                </h1>
                {currentUser?.isAdmin && (
                  <Badge
                    className="flex items-center gap-2 px-3 py-1"
                    style={{
                      background: "linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.3))",
                      border: "1px solid rgba(239, 68, 68, 0.4)",
                      color: "#fca5a5",
                      boxShadow: "0 0 15px rgba(239, 68, 68, 0.3)",
                    }}
                  >
                    <Shield className="h-4 w-4" />
                    Admin
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => setCurrentView("create")}
                className="relative overflow-hidden group h-12 px-6"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  border: "none",
