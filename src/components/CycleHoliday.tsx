import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Christmas = "🎄 Christmas",
    Halloween = "🎃 Halloween",
    NewYear = "🎉 New Year",
    Thanksgiving = "🦃 Thanksgiving",
    Valentines = "💖 Valentine's Day",
}

const alphabetOrder = [
    Holiday.Christmas,
    Holiday.Halloween,
    Holiday.NewYear,
    Holiday.Thanksgiving,
    Holiday.Valentines,
];

const yearOrder = [
    Holiday.NewYear,
    Holiday.Valentines,
    Holiday.Halloween,
    Holiday.Thanksgiving,
    Holiday.Christmas,
];

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(Holiday.NewYear);

    const cycleByAlphabet = () => {
        const currentIndex = alphabetOrder.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % alphabetOrder.length;
        setHoliday(alphabetOrder[nextIndex]);
    };

    const cycleByYear = () => {
        const currentIndex = yearOrder.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % yearOrder.length;
        setHoliday(yearOrder[nextIndex]);
    };

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={cycleByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={cycleByYear}>Advance by Year</Button>
        </div>
    );
}
