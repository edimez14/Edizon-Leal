"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function DeployTerminal({ onComplete }: { onComplete?: () => void }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textToType = `$ # Authenticate to Fly.io
$ flyctl auth login|
Successfully logged in as edimez14@gmail.com

$ # Provision app and database cluster
$ flyctl launch --no-deploy --region bog|
Created app core-backend-api
Provisioning 1GB Postgres cluster... OK.

$ # Deploying zero-downtime update to edge network
$ # typo simulation and correction
$ flyctl deplooy~~y --ha=true|
==> Verifying app config
--> Verified app config
==> Building image from Dockerfile
=> => naming to registry.fly.io/core-backend-api:deployment-01
==> Creating release
Machine 148ed12 (bog) update finished
Machine 582a4c9 (bog) update finished

$ Verifyinng~~g deployment...
Deployment complete. 2/2 machines healthy. OK.`;

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
      let delay = Math.random() * 10 + 10; 

      if (char === "~") {
        currentStr = currentStr.slice(0, -1);
        delay = 15;
      } else if (char === "|") {
        delay = 400;
      } else {
        currentStr += char;
        if (char === "\n") delay = 80;
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
    escaped = escaped.replace(/^(\$\s)/gm, "§BOLD_EMERALD§$1§END§");
    escaped = escaped.replace(/\b(flyctl|auth|login|launch|deploy|Machine|Deployment|update)\b/g, "§BLUE§$1§END§");
    escaped = escaped.replace(/(--[\w-]+)/g, "§PURPLE§$1§END§");
    escaped = escaped.replace(/(==>|-->|=>)/g, "§GRAY§$1§END§");
    escaped = escaped.replace(/\b(OK|healthy|finished|Successfully|Created)\b/g, "§EMERALD§$1§END§");
    
    escaped = escaped.replace(/§GRAY§/g, '<span class="text-gray-500">');
    escaped = escaped.replace(/§BOLD_EMERALD§/g, '<span class="text-emerald-500 font-bold">');
    escaped = escaped.replace(/§BLUE§/g, '<span class="text-blue-400">');
    escaped = escaped.replace(/§PURPLE§/g, '<span class="text-purple-400">');
    escaped = escaped.replace(/§EMERALD§/g, '<span class="text-emerald-400">');
    escaped = escaped.replace(/§END§/g, '</span>');
    return escaped;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="border border-white/10 rounded-lg bg-black p-6 pb-14 font-mono text-sm relative shadow-2xl shadow-cyan-500/10 h-[400px] flex flex-col overflow-hidden"
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
          className={`inline-block w-2.5 h-4 bg-cyan-500 align-middle ml-0.5 ${
            isTyping ? "animate-pulse" : "animate-[pulse_1.5s_ease-in-out_infinite]"
          }`}
        />
      </div>

      {!isTyping && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-cyan-500 bg-black pl-2 py-1 rounded">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          DEPLOYMENT SUCCESSFUL
        </motion.div>
      )}
    </motion.div>
  );
}