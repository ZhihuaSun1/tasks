import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(d6());
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    const rollLeftDie = () => setLeftDie(d6());
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    const rollRightDie = () => setRightDie(d6());
    const gameStatus = () => {
        if (leftDie === 1 && rightDie === 1) {
            return "Lose";
        } else if (leftDie === rightDie) {
            return "Win";
        } else {
            return null;
        }
    };

    return (
        <div>
            {}
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span> vs </span>
                <span data-testid="right-die">{rightDie}</span>
            </div>

            {}
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <Button onClick={rollRightDie}>Roll Right</Button>

            {}
            {gameStatus() && <div>{gameStatus()}</div>}
        </div>
    );
}
