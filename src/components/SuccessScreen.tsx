import React, { useEffect, useState } from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

interface SuccessScreenProps {
  onContinue: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onContinue }) => {
  const [showMessage, setShowMessage] = useState(false);
  
  const message = "You just made my heart skip a beat. You're the most beautiful part of my world, and I'm so lucky to have you, oh wait, I don't have you yet, I will though.";
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showMessage && messageIndex < message.length) {
      const timer = setTimeout(() => {
        setDisplayedMessage(prev => prev + message[messageIndex]);
        setMessageIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [showMessage, messageIndex, message]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-fadeIn">
      <div className="text-center max-w-2xl">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Celebration effects */}
          <div className="absolute inset-0 pointer-events-none">
            <Heart className="absolute top-4 left-4 w-8 h-8 text-pink-400 animate-bounce fill-current" />
            <Heart className="absolute top-8 right-6 w-6 h-6 text-rose-400 animate-pulse fill-current" />
            <Sparkles className="absolute bottom-6 left-8 w-6 h-6 text-pink-500 animate-spin" />
            <Heart className="absolute bottom-4 right-4 w-10 h-10 text-pink-300 animate-heartbeat fill-current" />
          </div>
          
          <div className="relative z-10">
            <div className="mb-8">
              <Heart className="w-24 h-24 text-pink-500 mx-auto animate-heartbeat fill-current" />
            </div>
            
            <h1 className="font-pacifico text-4xl text-pink-600 mb-8 animate-bounce">
              Yay! 💕✨
            </h1>
            
            {showMessage && (
              <p className="text-gray-700 text-xl leading-relaxed mb-8 typewriter">
                {displayedMessage}
                <span className="animate-pulse">|</span>
              </p>
            )}
            
            {messageIndex >= message.length && (
              <button
                onClick={onContinue}
                className="group bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto animate-fadeIn"
              >
                Continue
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
