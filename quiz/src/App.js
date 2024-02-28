import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card } from "react-bootstrap";
import { useState } from "react";
import Quiz from "./containers/Quiz";

function useGeolocation() {}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [countClicks, setCountClicks] = useState(0);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const { lat, lng } = position;

  function getPosition() {
    setCountClicks((count) => count + 1);

    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return (
    <div>
      <Button onClick={getPosition} disabled={isLoading}>
        Get my position
      </Button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <div style={{ height: "100vh", width: "100%" }}>
          <p>
            Your GPS position:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
            >
              {lat}, {lng}
            </a>
          </p>
          <p>You requested position {countClicks} times</p>
        </div>
      )}
    </div>
  );
}

export default App;
