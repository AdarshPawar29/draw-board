import React, { useEffect } from 'react';
import Hammer from 'hammerjs';

const GestureHandler = () => {
    useEffect(() => {
        const canvas = document.querySelector('.canvas');
        const hammer = new Hammer(canvas);

        hammer.get('pinch').set({ enable: true });
        hammer.on('pinch', (e) => {
            // Implement pinch-to-zoom functionality
        });

        return () => {
            hammer.destroy();
        };
    }, []);

    return null;
};

export default GestureHandler;
