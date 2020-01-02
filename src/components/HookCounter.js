import React, { useState } from 'react';

const HookCounter = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <div>Number of click {count}</div>
            <div><button onClick={() => setCount(count + 1)}>Click</button></div>
        </div>
    );
}

export default HookCounter;