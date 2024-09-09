import React from 'react';
import ContentTiles from './components/ContentTiles';
import { tiles } from './data/tilesData';

const App: React.FC = () => {
  return (
    <div className="App">
      <ContentTiles tiles={tiles} />
    </div>
  );
};

export default App;