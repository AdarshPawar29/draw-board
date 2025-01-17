import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';
import LayerManager from './components/LayerManager';
import UndoRedo from './components/UndoRedo';
import ZoomControls from './components/ZoomControls';
import ColorPicker from './components/ColorPicker';
import ExportComponent from './components/ExportComponent';

function App() {

  return (
    <div className="app-container">

      <main className="app-main">
        <aside className="app-sidebar">
          <Toolbar />
          <ColorPicker />
          <LayerManager />
          <UndoRedo />
          <ZoomControls />
          <ExportComponent />
        </aside>
        <section className="app-canvas">
          <Canvas />
        </section>
      </main>

    </div>
  );
}

export default App;
