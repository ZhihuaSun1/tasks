import React, { createContext, useContext, useState } from "react";

export const initialDhValue = 10;


const DoubleHalfContext = createContext<{
    dhValue: number;
    setDhValue: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);

export const DoubleHalfProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <DoubleHalfContext.Provider value={{ dhValue, setDhValue }}>
            {children}
        </DoubleHalfContext.Provider>
    );
};

export const useDoubleHalf = () => {
    const context = useContext(DoubleHalfContext);
    if (!context) {
        throw new Error(
            "useDoubleHalf must be used within a DoubleHalfProvider",
        );
    }
    return context;
};

