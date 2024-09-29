import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.ReactElement {
    const [d1, setD1] = useState<number>(1);
    const [d2, setD2] = useState<number>(5);

    return (
        <div>
            <Button onClick={() => { setD1(d6()); }}>Roll Left</Button>
            <Button onClick={() => { setD2(d6()); }}>Roll Right</Button>
            <br />
            <span data-testid="left-die">{d1}</span>
            <br />
            <span data-testid="right-die">{d2}</span>
            <br />
            {d1 === 1 && d2 === 1 ?
                <span>Lose</span>
            : d1 === d2 && d1 !== 1 ?
                <span>Win</span>
            :   <span>Not Equal</span>}
        </div>
    );
}
