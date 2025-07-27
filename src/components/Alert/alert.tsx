// src/components/Alert/SettingsAlert.tsx
"use client"

import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { useEffect } from "react";


interface IAlertProps {
  title: string;
  message: string;
  type: "success" | "error";
  onClose?: () => void;
  autoClose?: boolean; 
  autoCloseDelay?: number; 
}

export function AlertComponent({ title, message, type, onClose, autoClose = true, autoCloseDelay = 3000 }: IAlertProps) {

  useEffect(() => {
    if (autoClose && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer); // Limpa o timer quando o componente é desmontado ou quando autoCloseDelay muda
    }
  }, [autoClose, autoCloseDelay, onClose]);

  return (
     <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] w-full max-w-lg px-4 
     ">
      <Alert variant={type === "success" ? "default" : "destructive"}
      className={`
          relative shadow-lg 
          ${type === "success" 
            ? "bg-[var(--background)] border-green-400" 
            : "bg-[var(--background)] border-red-400"
          }
        `}
      >
        {type === "success" ? <CheckCircle2Icon /> : <AlertCircleIcon />}
        
        <AlertTitle
        className="text-white">
          {title}
        </AlertTitle>
        <AlertDescription className="mt-2">
          {message}
        </AlertDescription>
      </Alert>
    </div>
  )
}