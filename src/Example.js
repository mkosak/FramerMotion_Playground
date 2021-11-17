import React, { useRef } from 'react';
import { motion } from 'framer-motion';
export const Example = ({ shapes }) => {
    const constraintsRef = useRef(null);

    return (
        <>
            <>
                <motion.div className="drag-area" ref={constraintsRef} />
                {shapes.map((shape, i) => {
                    return (
                        <motion.div key={i + shape.id} className="shape" drag dragConstraints={constraintsRef}>
                            <img src={shape.url} alt={shape.name} />
                        </motion.div>
                    );
                })}
            </>
        </>
    );
};
