import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Send, Volume2, VolumeX } from 'lucide-react';
import LandingScreen from './components/LandingScreen';
import QuestionScreen from './components/QuestionScreen';
import SuccessScreen from './components/SuccessScreen';
import MessageScreen from './components/MessageScreen';
import FloatingHearts from './components/FloatingHearts';
import CursorTrail from './components/CursorTrail';

export type Screen = 'landing' | 'question' | 'success' | 'message' | 'final';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [noClickCount, setNoClickCount] = useState(0);
  const [userMessage, setUserMessage] = useState('');
  const [isMuted, setIsMuted] = useState(true);
  const [herName, setHerName] = useState('Beautiful');

  const handleScreenTransition = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleNoClick = () => {
    setNoClickCount(prev => prev + 1);
  };

  const handleYesClick = () => {
    setCurrentScreen('success');
  };

  const handleMessageSubmit = (message: string) => {
    setUserMessage(message);
    setCurrentScreen('final');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-red-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-rose-200 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-red-200 rounded-full opacity-25 animate-pulse"></div>
      </div>

      <FloatingHearts />
      <CursorTrail />

      {/* Music toggle */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
      >
        {isMuted ? <VolumeX className="w-5 h-5 text-pink-600" /> : <Volume2 className="w-5 h-5 text-pink-600" />}
      </button>

      {/* Main content */}
      <div className="relative z-10">
        {currentScreen === 'landing' && (
          <LandingScreen 
            herName={herName}
            onContinue={() => handleScreenTransition('question')}
          />
        )}
        
        {currentScreen === 'question' && (
          <QuestionScreen
            noClickCount={noClickCount}
            onNoClick={handleNoClick}
            onYesClick={handleYesClick}
          />
        )}
        
        {currentScreen === 'success' && (
          <SuccessScreen
            onContinue={() => handleScreenTransition('message')}
          />
        )}
        
        {currentScreen === 'message' && (
          <MessageScreen
            onSubmit={handleMessageSubmit}
            onSkip={() => handleScreenTransition('final')}
          />
        )}
        
        {currentScreen === 'final' && (
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="text-center max-w-md">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl animate-fadeIn">
                <Sparkles className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-spin" />
                <h1 className="font-pacifico text-3xl text-pink-600 mb-4">
                  You just made Faozil's day! ❤️
                </h1>
                <p className="text-gray-700 text-lg">
                  {userMessage ? "Your message has been sent with love! 💌" : "Thank you for brightening his world! ✨"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
