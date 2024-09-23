import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>
                <span
                    style={{
                        backgroundColor: "red",
                        border: "1px solid red",
                        padding: "4px",
                    }}
                >
                    MY FIRST HOMEWORK
                </span>
            </h1>
            <ol>
                <li>Get A</li>
                <li>Become a Software Engineer</li>
                <li>Study hard</li>
            </ol>
            <img src="/logo192.png" alt="A picture" />
            <header className="App-header">
                <Container>
                    <Row>
                        <Col>
                            UD CISC275 with React Hooks and TypeScript -
                            ZhihuaSun1 HHH Hello World
                        </Col>
                        <Col>Second part</Col>
                    </Row>
                </Container>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
