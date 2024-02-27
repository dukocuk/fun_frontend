import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Quiz() {
  const [quizData, setQuizData] = useState();
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isClickable, setIsClickable] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedList, setSelectedList] = useState(Array(10).fill(""));
  const [countdown1, setCountdown1] = useState(10);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => setQuizData(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let clickableTimer;
    let resetTimer;

    if (quizStarted) {
      // After 10 seconds, make the quiz clickable
      clickableTimer = setTimeout(() => {
        setIsClickable(true);
        setCountdown1(20);
      }, 10000);

      // After 30 seconds, reset the quiz or perform any other action
      resetTimer = setTimeout(() => {
        goToNextQuestion();
      }, 30000);
    }

    // Cleanup function to clear timers
    return () => {
      clearTimeout(clickableTimer);
      clearTimeout(resetTimer);
    };
  }, [quizStarted, currentQuestionIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown1 > 0) {
        setCountdown1(countdown1 - 1); // Decrement countdown every second
      }
    }, 1000);

    // Clear the timeout when component unmounts or when countdown reaches 0
    return () => clearTimeout(timer);
  }, [countdown1]); // Re-run effect whenever countdown changes

  function handleStart() {
    setCountdown1(10);
    setQuizStarted(true);
  }

  const addString = (value) => {
    const updatedList = [...selectedList];
    updatedList[currentQuestionIndex] = value;
    setSelectedList(updatedList);
  };

  function goToNextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
      if (selectedOption !== "") {
        addString(selectedOption);
      }
      setCountdown1(10);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsClickable(false);
      setSelectedOption("");
    } else {
      setCompleted(true);
    }
  }

  function handleOptionChange(option) {
    setSelectedOption(option);
    addString(option);
  }

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "6rem",
      }}
    >
      {!quizStarted && !completed && (
        <Button onClick={handleStart}>Start Quiz</Button>
      )}
      {quizStarted && !completed && (
        <Container style={{ width: "32rem", textAlign: "center" }}>
          <div>
            <h1>{countdown1}</h1>
          </div>
          <Card style={{ width: "32rem" }}>
            <Card.Header>Question {currentQuestionIndex + 1}</Card.Header>
            <Card.Text>{quizData[currentQuestionIndex]?.title}</Card.Text>
            <Form>
              {["A", "B", "C", "D"].map((option) => (
                <div key={option} className="mb-3">
                  <Form.Check
                    disabled={!isClickable}
                    inline
                    type="radio"
                    id={`option-${option}`}
                    label={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                  />
                </div>
              ))}
            </Form>
            <Card.Footer>You answered {selectedOption}</Card.Footer>
          </Card>
        </Container>
      )}
      {completed && (
        <Container style={{ width: "32rem", textAlign: "center" }}>
          <Card style={{ width: "32rem" }}>
            <Card.Header>Game Completed</Card.Header>
            <Card.Title>Results</Card.Title>
            <Card.Body>
              {selectedList.map((item, index) =>
                index >= 0 ? (
                  <Card.Text key={Math.random(2)}>
                    {index + 1}-{item}
                  </Card.Text>
                ) : (
                  ""
                )
              )}
            </Card.Body>
          </Card>
        </Container>
      )}
    </Container>
  );
}
