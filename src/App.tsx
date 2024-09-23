import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <>
            <h1>
                <span
                    style={{
                        backgroundColor: "red",
                        border: "1px solid red",
                        padding: "4px",
                    }}
                >
                    MY FIRST HOMEWORK{" "}
                </span>
                <ol>
                    <li>Get A</li>
                    <li>Become a Software Engineer</li>
                    <li>Study hard</li>
                </ol>
                <img src="public/logo192.png" alt="A picture" />
                <div className="App">
                    <header className="App-header">
                        <Container>
                            <Row>
                                <Col>
                                    UD CISC275 with React Hooks and TypeScript -
                                    ZhihuaSun HHH Hello World
                                </Col>
                                <Col>Second part</Col>
                            </Row>
                        </Container>
                    </header>
                    <p>
                        Edit <code>src/App.tsx</code> and save. This page will
                        automatically reload.
                    </p>
                </div>
            </h1>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <hr></hr>
            <Counter />
            <hr />
            <RevealAnswer />
            <hr />
            <StartAttempt />
            <hr />
            <TwoDice />
            <hr />
            <ChangeType />
            <hr />
            <CycleHoliday />
        </>
    );
}

export default App;
