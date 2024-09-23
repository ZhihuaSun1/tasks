import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const generateDifferentDice = () => {
        let left = d6();
        let right = d6();
        while (left === right) {
            right = d6();
        }
        return { left, right };
    };

    const { left: initialLeft, right: initialRight } = generateDifferentDice();
    const [leftDie, setLeftDie] = useState<number>(initialLeft);
    const [rightDie, setRightDie] = useState<number>(initialRight);
    const rollLeftDie = () => {
        let newLeft;
        do {
            newLeft = d6();
        } while (newLeft === rightDie);
        setLeftDie(newLeft);
    };
    const rollRightDie = () => {
        let newRight;
        do {
            newRight = d6();
        } while (newRight === leftDie);
        setRightDie(newRight);
    };

    const gameStatus = () => {
        if (leftDie === 1 && rightDie === 1) {
            return "Lose";
        } else if (leftDie === rightDie) {
            return "Win";
        } else {
            return null;
        }
    };

    const statusMessage = gameStatus();

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span> vs </span>
                <span data-testid="right-die">{rightDie}</span>
            </div>

            <Button onClick={rollLeftDie}>Roll Left</Button>
            <Button onClick={rollRightDie}>Roll Right</Button>

            {statusMessage && <div>{statusMessage}</div>}
        </div>
    );
}
