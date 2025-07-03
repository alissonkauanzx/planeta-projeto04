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

export default function Loading() {
  return null;
}
