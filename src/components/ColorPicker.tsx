import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = () => {
    const [color, setColor] = useState('#000');

    return (
        <div className="color-picker">
            <SketchPicker color={color} onChangeComplete={(color) => setColor(color.hex)} />
        </div>
    );
};

export default ColorPicker;
