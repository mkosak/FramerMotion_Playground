import * as React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { Example } from './Example';

import './styles.css';

import Table_Long from './assets/Table_Long.svg';
import Table_13_Round from './assets/Table_13_Round.svg';
import Table_2 from './assets/Table_2.svg';
import Plant from './assets/Plant.svg';

const shapesList = [
    {
        id: '3245325235',
        name: 'Table Long',
        url: Table_Long,
    },
    {
        id: '3245325234',
        name: 'Table 13 Round',
        url: Table_13_Round,
    },
    {
        id: '3245325233',
        name: 'Table 2',
        url: Table_2,
    },
    {
        id: '3245325232',
        name: 'Plant',
        url: Plant,
    },
];

const App = () => {
    const [count, setCount] = useState(0);
    const [shapes] = useState(shapesList);
    const [currentShapes, setCurrentShapes] = useState([]);

    const handleShapeClick = (shape) => {
        console.log('shape', shape);
        const newShapes = [...currentShapes];
        newShapes.push(shape);

        setCurrentShapes(newShapes);
    };

    return (
        <>
            <aside className="side-panel">
                <ul>
                    {shapes.map((shape, i) => {
                        return (
                            <li
                                key={shape.id + i}
                                onClick={() => {
                                    handleShapeClick(shape);
                                }}
                            >
                                <img src={shape.url} alt={shape.name} />
                            </li>
                        );
                    })}
                </ul>
            </aside>
            {/* <main className="canvas">
                <div className="example-container">
                    <Example key={count} shapes={currentShapes} />
                </div>
            </main> */}

            <Example key={count} shapes={currentShapes} />
        </>
    );
};

render(<App />, document.getElementById('root'));
