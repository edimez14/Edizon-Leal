"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function DjangoTerminal({ onComplete }: { onComplete?: () => void }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textToType = `# core/views.py - Optimized for High-Throughput
import logging
from django.db import transaction
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Order
from .serializers import OrderSerializer

logger = logging.getLogger(__name__)|

class OrderViewSet(viewsets.ModelViewSet):
    """
    Handles high-throughput order processing with atomic transactions.
    Ensures data integrity under heavy concurrent load.
    """
    # Performance Optimization: Prevent N+1 queries issue
    # by pre-fetching related customer data in a single SQL join.
    queryset = Order.objects.select_related('customer').all()
    serializer_class = OrderSerializer|

    @transaction.atomic
    def create(self, request, *args, **kwargs):
        # typo simulation and correction
        seriaaal~~~lizer = self.get_serializer(data=request.data)
        
        # Validate data integrity before proceeding
        serializer.is_valid(raise_exception=True)|
        
        # Perform creation within the atomic transaction scope
        self.perform_create(serializer)
        
        # Async-safe logging (simulated)
        logger.info(f"Order created successfully: ID {serializer.data['id']}")
        
        # Return 201 Created with serialized data
        return Response(serializer.data, status=status.HTTP_201_CREATED)`;

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
      let delay = Math.random() * 15 + 10; // Velocidad de escritura acelerada

      if (char === "~") {
        currentStr = currentStr.slice(0, -1);
        delay = 15;
      } else if (char === "|") {
        delay = 400; // Pausas más cortas
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
    escaped = escaped.replace(/\b(import|from|class|def|return|if|else)\b/g, "§PURPLE§$1§END§");
    escaped = escaped.replace(/\b(self|request|True|False|None|args|kwargs)\b/g, "§BLUE§$1§END§");
    escaped = escaped.replace(/(@\w+(?:\.\w+)?)/g, "§YELLOW§$1§END§");
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
      className="border border-white/10 rounded-lg bg-black p-6 pb-14 font-mono text-sm relative shadow-2xl shadow-emerald-500/10 h-[400px] flex flex-col overflow-hidden"
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
          className={`inline-block w-2.5 h-4 bg-emerald-500 align-middle ml-0.5 ${
            isTyping ? "animate-pulse" : "animate-[pulse_1.5s_ease-in-out_infinite]"
          }`}
        />
      </div>

      {!isTyping && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-emerald-500 bg-black pl-2 py-1 rounded">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          UNIT TESTS PASSED (12/12)
        </motion.div>
      )}
    </motion.div>
  );
}