import React, { useState } from 'react';

interface NameScreenProps {
  onSubmit: (name: string) => void;
}

const NameScreen: React.FC<NameScreenProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-fadeIn">
      <div className="text-center max-w-md">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
          <h1 className="font-pacifico text-4xl text-pink-600 mb-6">
            Enter your name 💖
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-4 border-2 border-pink-200 rounded-2xl focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 text-lg"
              autoFocus
            />
            <button
              type="submit"
              disabled={!name.trim()}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NameScreen;