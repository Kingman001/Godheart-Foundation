
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string }[]>([
    { role: 'ai', text: 'Hi! I am the God-heart Assistant. How can I help you today? You can ask about our scholarships, grants, or how to donate.' },
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await getGeminiResponse(userMsg);
    setMessages((prev) => [...prev, { role: 'ai', text: response }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]" role="complementary" aria-label="AI Chat Assistant">
      {isOpen ? (
        <div 
          className="bg-white rounded-2xl shadow-2xl w-[350px] sm:w-[400px] flex flex-col border border-slate-200 h-[500px] overflow-hidden"
          role="dialog"
          aria-labelledby="assistant-title"
        >
          {/* Header */}
          <div className="bg-rose-600 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Bot className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span id="assistant-title" className="text-white font-bold">God-heart Assistant</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:bg-white/10 p-1 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close assistant"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef} 
            className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50"
            aria-live="polite"
            role="log"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'} space-x-2`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-indigo-100' : 'bg-rose-100'}`} aria-hidden="true">
                    {msg.role === 'user' ? <User className="w-4 h-4 text-indigo-600" /> : <Bot className="w-4 h-4 text-rose-600" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'}`}>
                    <span className="sr-only">{msg.role === 'user' ? 'You said:' : 'Assistant said:'}</span>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 animate-pulse text-slate-400 text-xs">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200 bg-white">
            <div className="flex space-x-2">
              <label htmlFor="assistant-input" className="sr-only">Message the assistant</label>
              <input
                id="assistant-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-grow bg-slate-100 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-rose-500 outline-none transition-all"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-rose-600 text-white p-2.5 rounded-xl hover:bg-rose-700 disabled:opacity-50 transition-colors focus-visible:ring-4 focus-visible:ring-rose-200 outline-none"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-rose-600 hover:bg-rose-700 text-white p-4 rounded-2xl shadow-2xl hover:scale-110 transition-all flex items-center space-x-2 group focus-visible:ring-4 focus-visible:ring-rose-200 outline-none"
          aria-haspopup="dialog"
          aria-label="Open AI Assistant"
        >
          <MessageCircle className="w-6 h-6" aria-hidden="true" />
          <span className="font-bold hidden sm:inline">Need Help?</span>
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;
