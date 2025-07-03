"use client";
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { upload } from "@vercel/blob/client";
import OptimizedSpaceBackground from '../components/background/OptimizedSpaceBackground';
import OptimizedCard from '../components/cards/OptimizedCard';

// Ícones (instale lucide-react: npm install lucide-react)
import { 
  Plus, Search, Eye, MessageCircle, Edit, Trash2, Upload as UploadIcon, 
  Image as ImageIcon, Video, Calendar, X, Send, LogOut, Star, FileText, 
  Shield, Zap, Sparkles 
} from 'lucide-react';

export default function PlanetaProjeto() {
  const [currentView, setCurrentView] = useState("login");
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [newComment, setNewComment] = useState("");

  // Refs para formulários
  const loginEmailRef = useRef("");
  const loginPasswordRef = useRef("");
  const registerEmailRef = useRef("");
  const registerPasswordRef = useRef("");

  // Dados de exemplo
  const [users, setUsers] = useState([
    { id: 1, email: "admin@planeta.com", password: "123456", isAdmin: true },
    { id: 2, email: "user@planeta.com", password: "123456", isAdmin: false },
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Sistema Solar Interativo",
      description: "Projeto educacional sobre o sistema solar com realidade aumentada",
      category: "Educação",
      author: "João Silva",
      authorId: 2,
      date: "2024-12-15",
      views: 245,
      comments: [
        { id: 1, author: "Maria Santos", content: "Projeto incrível!", date: "2024-12-16" },
      ],
      images: ["/assets/placeholder.svg"],
      content: "Descrição completa do projeto...",
    },
    // Adicione mais projetos conforme necessário
  ]);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || project.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", "Educação", "Tecnologia", "Ciência"];

  // Funções de autenticação
  const handleLogin = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      const user = users.find(u => 
        u.email === loginEmailRef.current && 
        u.password === loginPasswordRef.current
      );
      
      if (user) {
        setCurrentUser(user);
        setCurrentView("projects");
      } else {
        alert("Credenciais inválidas!");
      }
      setLoading(false);
    }, 1000);
  }, [users]);

  const handleRegister = useCallback(() => {
    if (!registerEmailRef.current || !registerPasswordRef.current) {
      alert("Preencha todos os campos!");
      return;
    }

    if (users.some(u => u.email === registerEmailRef.current)) {
      alert("Email já cadastrado!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const newUser = {
        id: users.length + 1,
        email: registerEmailRef.current,
        password: registerPasswordRef.current,
        isAdmin: false,
      };
      
      setUsers([...users, newUser]);
      alert("Conta criada com sucesso!");
      setCurrentView("login");
      setLoading(false);
    }, 1000);
  }, [users]);

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView("login");
  };

  // Visualizações
  const LoginView = () => (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900/90 backdrop-blur-md p-8 rounded-xl border border-blue-500/30 shadow-2xl shadow-blue-500/10">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl">
            🌎
          </div>
          <h1 className="text-2xl font-bold text-white">Planeta Projeto</h1>
          <p className="text-slate-400 mt-2">Entre na sua conta espacial</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-slate-300 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white"
              placeholder="seu@email.com"
              onChange={e => loginEmailRef.current = e.target.value}
            />
          </div>
          
          <div>
            <label className="block text-slate-300 mb-2">Senha</label>
            <input
              type="password"
              className="w-full p-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white"
              placeholder="••••••••"
              onChange={e => loginPasswordRef.current = e.target.value}
            />
          </div>
          
          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full py-3 rounded-lg font-medium ${
              loading ? "bg-gray-600" : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            } text-white transition-all`}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <button 
            onClick={() => setCurrentView("register")}
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Criar nova conta
          </button>
        </div>
      </div>
    </div>
  );

  // Outras views (Register, Projects, CreateProject, ProjectDetail) 
  // Seriam implementadas aqui seguindo o padrão acima...

  return (
    <div className="min-h-screen relative">
      <OptimizedSpaceBackground />
      
      {/* Renderização da view atual */}
      {currentView === "login" && <LoginView />}
      {currentView === "register" && <RegisterView />}
      {/* ... outras views */}
    </div>
  );
}