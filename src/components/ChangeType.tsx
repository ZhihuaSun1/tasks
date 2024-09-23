import React, { useState } from "react";
import { Button } from "react-bootstrap";


enum QuestionType {
    ShortAnswer = "Short Answer",
    MultipleChoice = "Multiple Choice",
}

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        QuestionType.ShortAnswer,
    );

    const toggleQuestionType = () => {
        setQuestionType((prevType) =>
            prevType === QuestionType.ShortAnswer ?
                QuestionType.MultipleChoice
            :   QuestionType.ShortAnswer,
        );
    };

    return (
        <div>
            {}
            <div>{questionType}</div>
            {}
            <Button onClick={toggleQuestionType}>Change Type</Button>
        </div>
    );
}