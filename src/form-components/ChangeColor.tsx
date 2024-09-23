import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];

    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color) => (
                    <div
                        key={color}
                        style={{ display: "inline-block", marginRight: "10px" }}
                    >
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => { setSelectedColor(color); }}
                        />
                        <label
                            style={{
                                textTransform: "capitalize",
                                marginLeft: "4px",
                                backgroundColor: color,
                                color: color === "white" ? "black" : "white",
                                padding: "2px 5px",
                                borderRadius: "4px",
                            }}
                        >
                            {color}
                        </label>
                    </div>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    padding: "10px",
                    backgroundColor: selectedColor,
                    color: selectedColor === "white" ? "black" : "white",
                    textAlign: "center",
                    width: "200px",
                }}
            >
                You have chosen {selectedColor}.
            </div>
        </div>
    );
}
