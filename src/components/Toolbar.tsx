import React from 'react';
import useCanvasStore from '../store/canvasStore';

const Toolbar = () => {
    const { setTool } = useCanvasStore();

    return (
        <div className="toolbar">
            <button onClick={() => setTool('pencil')}>Pencil</button>
            <button onClick={() => setTool('eraser')}>Eraser</button>
            <button onClick={() => setTool('text')}>Text</button>
            <button onClick={() => setTool('shape')}>Shape</button>
        </div>
    );
};

export default Toolbar;
