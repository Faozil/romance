import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

interface LandingScreenProps {
  herName: string;
  onContinue: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ herName, onContinue }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-fadeIn">
      <div className="text-center max-w-md">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
          {/* Animated heart */}
          <div className="relative mb-8">
            <Heart className="w-20 h-20 text-pink-500 mx-auto animate-heartbeat fill-current" />
            <div className="absolute inset-0 w-20 h-20 mx-auto animate-ping">
              <Heart className="w-full h-full text-pink-300" />
            </div>
          </div>
          
          <h1 className="font-pacifico text-4xl text-pink-600 mb-6">
            Hi {herName}! 💕
          </h1>
          
          <p className="text-gray-700 text-xl mb-8 leading-relaxed">
            I have something <span className="text-pink-600 font-semibold">special</span> to ask you...
          </p>
          
          <button
            onClick={onContinue}
            className="group bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
          >
            Continue
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
