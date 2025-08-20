import React from 'react';
import { Heart, HeartCrack } from 'lucide-react';

interface QuestionScreenProps {
  noClickCount: number;
  onNoClick: () => void;
  onYesClick: () => void;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({ noClickCount, onNoClick, onYesClick }) => {
  const getEncouragementMessage = () => {
    if (noClickCount === 0) return '';
    if (noClickCount < 3) return `Aww come on, Aldanesse... 🥺`;
    if (noClickCount < 5) return `You've clicked No ${noClickCount} times already... 😅`;
    if (noClickCount < 8) return `Maybe just say Yes? Pretty please? 🙏`;
    return `${noClickCount} times?! I'm not giving up! 💪`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-slideIn">
      <div className="text-center max-w-lg">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
          <h1 className="font-pacifico text-5xl text-pink-600 mb-8">
            Do you like Faozil?
          </h1>
          
          {noClickCount > 0 && (
            <p className="text-pink-500 text-lg mb-6 animate-bounce">
              {getEncouragementMessage()}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={onYesClick}
              className={`group bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center ${
                noClickCount > 0 ? 'animate-glow' : ''
              }`}
              style={{
                animation: noClickCount > 0 ? 'glow 2s ease-in-out infinite alternate' : 'none'
              }}
            >
              <Heart className="mr-3 w-6 h-6 fill-current animate-heartbeat" />
              Yes 💖
            </button>
            
            <button
              onClick={onNoClick}
              className="group bg-gray-400 hover:bg-gray-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center"
            >
              <HeartCrack className="mr-3 w-6 h-6" />
              No 💔
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
