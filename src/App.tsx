import React from 'react';
import Header from './components/Header';
import Pictures from './components/Pictures';
import './App.css';

export type PictureItemType = {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: object;
  images: object;
};

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Pictures />
    </div>
  );
};

export default App;
