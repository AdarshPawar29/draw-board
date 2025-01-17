import React, { useRef, useEffect } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import useCanvasStore from '../store/canvasStore';

const Canvas = () => {
    const { layers, addLayer, updateLayer, tool } = useCanvasStore();
    const isDrawing = useRef(false);

    const handleMouseDown = () => {
        if (tool !== 'pencil' && tool !== 'eraser') return;
        isDrawing.current = true;
        const newLayer = {
            id: `layer-${layers.length + 1}`,
            name: `Layer ${layers.length + 1}`,
            visible: true,
            locked: false,
            elements: [],
        };
        addLayer(newLayer);
    };

    const handleMouseMove = (e) => {
        if (!isDrawing.current) return;
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        const lastLayer = layers[layers.length - 1];
        const newElements = lastLayer.elements.concat([point]);
        updateLayer(layers.length - 1, { ...lastLayer, elements: newElements });
    };

    const handleMouseUp = () => {
        isDrawing.current = false;
    };

    return (
        <div className="canvas">
            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                {layers.map((layer, i) => (
                    <Layer key={i}>
                        <Line
                            points={layer.elements.flatMap((point) => [point.x, point.y])}
                            stroke={tool === 'eraser' ? 'white' : 'black'}
                            strokeWidth={2}
                            tension={0.5}
                            lineCap="round"
                            globalCompositeOperation={
                                layer.locked ? 'destination-out' : 'source-over'
                            }
                        />
                    </Layer>
                ))}
            </Stage>
        </div>
    );
};

export default Canvas;
