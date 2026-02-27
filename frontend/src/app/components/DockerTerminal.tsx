"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function DockerTerminal({ onComplete }: { onComplete?: () => void }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textToType = `# syntax=docker/dockerfile:1
# Multi-stage build for minimal production image footprint
# Stage 1: Build dependencies
FROM python:3.11-slim-bookworm AS builder|

# Optimization: Prevent Python from writing .pyc files
ENV PYTHONDONTWRITEBYTECODE=1 \\
    # Optimization: Force stdout/stderr to be unbuffered
    PYTHONUNBUFFERED=1

WORKDIR /build

# Install system build dependencies (GCC, libpq for PostgreSQL)
RUN apt-get update && apt-get install -y --no-install-recommends \\
    gcc \\
    libpq-dev|

# typo simulation and correction
COPY requrii~~~uirements.txt .
# Install Python dependencies to user local directory (keeps stage clean)
RUN pip install --user --no-cache-dir -r requirements.txt|

# Stage 2: Runtime image
FROM python:3.11-slim-bookworm

# Security Best Practice: Run application as non-root user
RUN addgroup --system django && adduser --system --ingroup django django

# Copy installed dependencies from builder stage
COPY --from=builder /root/.local /home/django/.local
COPY . /app
WORKDIR /app|

# Set environment paths for the non-root user
ENV PATH=/home/django/.local/bin:$PATH

USER django
EXPOSE 8000

# Use Gunicorn for production-grade WSGI serving
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "4", "core.wsgi:application"]`;

    let i = 0;
    let currentStr = "";
    let timeoutId: NodeJS.Timeout;

    const typeChar = () => {
      if (i >= textToType.length) {
        setIsTyping(false);
        if (onComplete) onComplete();
        return;
      }

      const char = textToType[i];
      let delay = Math.random() * 15 + 10;

      if (char === "~") {
        currentStr = currentStr.slice(0, -1);
        delay = 15;
      } else if (char === "|") {
        delay = 400;
      } else {
        currentStr += char;
        if (char === "\n") delay = 100;
      }

      setDisplayedText(currentStr);
      i++;
      timeoutId = setTimeout(typeChar, delay);
    };

    timeoutId = setTimeout(typeChar, 400);
    return () => clearTimeout(timeoutId);
  }, [onComplete]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      requestAnimationFrame(() => {
        if (terminalBodyRef.current) {
          terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
      });
    }
  }, [displayedText]);

  const highlightCode = (code: string) => {
    let escaped = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    escaped = escaped.replace(/(#.*)/g, "§GRAY§$1§END§");
    escaped = escaped.replace(/^(FROM|ENV|WORKDIR|RUN|COPY|USER|EXPOSE|CMD)\b/gm, "§PURPLE§$1§END§");
    escaped = escaped.replace(/\b(AS|&&)\b/g, "§BLUE§$1§END§");
    escaped = escaped.replace(/(--[\w-]+)/g, "§YELLOW§$1§END§");
    escaped = escaped.replace(/("[^"]*"?|'[^']*'?)/g, "§EMERALD§$1§END§");
    
    escaped = escaped.replace(/§GRAY§/g, '<span class="text-gray-500">');
    escaped = escaped.replace(/§PURPLE§/g, '<span class="text-purple-400">');
    escaped = escaped.replace(/§BLUE§/g, '<span class="text-blue-400">');
    escaped = escaped.replace(/§YELLOW§/g, '<span class="text-yellow-400">');
    escaped = escaped.replace(/§EMERALD§/g, '<span class="text-emerald-400">');
    escaped = escaped.replace(/§END§/g, '</span>');
    return escaped;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="border border-white/10 rounded-lg bg-black p-6 pb-14 font-mono text-sm relative shadow-2xl shadow-blue-500/10 h-[400px] flex flex-col overflow-hidden"
    >
      <style>{`.hide-scroll::-webkit-scrollbar { display: none; }`}</style>
      
      <div className="flex gap-2 mb-4 shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-500/20" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
        <div className="w-3 h-3 rounded-full bg-green-500/20" />
      </div>

      <div 
        ref={terminalBodyRef}
        className="text-gray-400 whitespace-pre-wrap flex-1 leading-relaxed overflow-y-auto pr-2 pointer-events-none hide-scroll"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        <span dangerouslySetInnerHTML={{ __html: highlightCode(displayedText) }} />
        <span
          className={`inline-block w-2.5 h-4 bg-blue-500 align-middle ml-0.5 ${
            isTyping ? "animate-pulse" : "animate-[pulse_1.5s_ease-in-out_infinite]"
          }`}
        />
      </div>

      {!isTyping && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-blue-500 bg-black pl-2 py-1 rounded">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          IMAGE BUILT (48.2 MB)
        </motion.div>
      )}
    </motion.div>
  );
}