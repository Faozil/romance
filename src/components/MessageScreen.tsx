import React, { useState } from 'react';
import { Send, Heart, ArrowRight } from 'lucide-react';

interface MessageScreenProps {
  onSubmit: (message: string) => void;
  onSkip: () => void;
}

const MessageScreen: React.FC<MessageScreenProps> = ({ onSubmit, onSkip }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSubmit(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-slideIn">
      <div className="text-center max-w-lg w-full">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
          <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-heartbeat fill-current" />
          
          <h1 className="font-pacifico text-3xl text-pink-600 mb-4">
            Leave a message for Faozil 💌
          </h1>
          
          <p className="text-gray-600 mb-8">
            Share your thoughts, feelings, or just say hello!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here... 💕"
              className="w-full p-4 border-2 border-pink-200 rounded-2xl focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 resize-none h-32 text-lg"
            />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="submit"
                disabled={!message.trim()}
                className="group bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send className="mr-3 w-5 h-5" />
                Send Message
              </button>
              
              <button
                type="button"
                onClick={onSkip}
                className="group bg-gray-400 hover:bg-gray-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Skip
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default MessageScreen
