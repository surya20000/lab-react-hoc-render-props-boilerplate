import React, { useState } from 'react';


function Parent  (props ) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            {props.render(count, handleClick)}
        </div>
    );
};

export default Parent;