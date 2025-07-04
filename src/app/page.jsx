"use client";

import { upload } from "@vercel/blob/client";
import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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

function OptimizedSpaceBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
        poster="/path/to/your/poster-image.jpg"
      >
        <source src="/path/to/your/background-video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo em loop.
      </video>
    </div>
  );
}

function OptimizedCard({ children }) {
  return (
    <Card className="bg-white shadow-md rounded-lg overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{children.title}</CardTitle>
        <CardDescription className="text-gray-600">
          {children.description}
        </CardDescription>
      </CardHeader>
      <CardContent>{children.content}</CardContent>
    </Card>
  );
}

export default function PlanetaProjeto() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto py-12 px-4 z-10 relative">
        <h1 className="text-4xl font-bold text-center mb-12">
          Meu Projeto Espacial
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Seus cartões ou conteúdo aqui */}
        </div>
      </main>
    </div>
  );
}
