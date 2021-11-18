import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Layout } from './Layout';
import { Refresh } from './Refresh';

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
    const [initData, setInitData] = useState();
    const [layoutData, setLayoutData] = useState();

    console.log('currentShapes', currentShapes);

    const handleShapeClick = (shape) => {
        // console.log('shape', shape);
        const newShapes = [...currentShapes];
        newShapes.push(shape);

        setCurrentShapes(newShapes);
    };

    const handleDragEnd = (shape, x, y) => {
        console.log('handleDragEnd', shape, x, y);

        let data = { ...layoutData };
        data[shape.id] = { shape, x, y };

        // console.log('data', data);

        setLayoutData(data);
        save();
    };

    const save = () => {
        // console.log('layoutData to set', layoutData);
        localStorage.setItem('layoutData', JSON.stringify(layoutData));
    };

    useEffect(() => {
        // console.log('load local', localStorage.getItem('layoutData'));
        const savedData = JSON.parse(localStorage.getItem('layoutData'));
        setInitData(savedData);

        // console.log('savedData', savedData);
    }, []);

    console.log('initData', initData);

    return (
        <>
            <Refresh onClick={() => setCount(count + 1)} />

            <aside className="side-panel">
                <ul>
                    {shapes.map((shape, i) => {
                        return (
                            <li key={shape.id + i}>
                                <img src={shape.url} alt={shape.name} />{' '}
                                <button
                                    onClick={() => {
                                        handleShapeClick(shape);
                                    }}
                                >
                                    Add
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </aside>

            <Layout key={count} initData={initData} shapes={currentShapes} onDragEnd={handleDragEnd} />
        </>
    );
};

render(<App />, document.getElementById('root'));
