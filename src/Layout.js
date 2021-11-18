import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

export const Layout = ({ initData, shapes, onDragEnd }) => {
    // console.log('Layout');
    const constraintsRef = useRef(null);
    const handleDragEnd = (shapeId, info) => {
        onDragEnd(shapeId, info.point.x, info.point.y);
    };
    // const [initDataToRender, setInitDataToRender] = useState([]);
    // const [renderData, setRenderData] = useState(false);

    // if (initData && Object.values(initData).length > 0) {
    //     console.log('here');
    //     const data = Object.values(initData).map((record) => {
    //         return {
    //             shape: shapesList.find((shape) => shape.id === record.shape.id),
    //             x: record.x,
    //             y: record.y,
    //         };
    //     });

    //     if (data.length > 0) {
    //         // console.log('has data', data);
    //         setInitDataToRender(data);
    //     }
    // }

    // console.log('initDataToRender', initDataToRender);

    // useEffect(() => {
    //     if (initDataToRender && initDataToRender.length > 0) {
    //         console.log('render');
    //         setRenderData(true);
    //     }
    // }, [initDataToRender]);

    return (
        <>
            <motion.div className="drag-area" ref={constraintsRef} />
            {shapes.map((shape, i) => {
                return (
                    <motion.div
                        key={shape.id + '_' + i}
                        className="shape"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={false}
                        dragMomentum={false}
                        onDragEnd={(event, info) => {
                            handleDragEnd(shape, info);
                        }}
                    >
                        <img src={shape.url} alt={shape.name} />
                    </motion.div>
                );
            })}
            {/* 
            {renderData &&
                initDataToRender.length > 0 &&
                initDataToRender.map((item, i) => {
                    return <div key={item.shape.id + '_' + i}>{item.x}</div>;
                    // <motion.div key={item.shape.id + '_' + i} className="shape" initial={{ x: item.x, y: item.y }}>
                    //     <img src={item.shape.url} alt={item.shape.name} />
                    // </motion.div>
                })} */}
        </>
    );
};
