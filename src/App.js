import "./App.css";
import UserCard from "./components/UserCard.js";
import Card from "./components/Card.js";

function App() {
  return (
    <main className="main-container">
      <div className="container">
        <div className="item item-1">
          <UserCard />
        </div>

        <div className="item">
          <Card
            color="light-orange"
            title="Work"
            time="32hrs"
            date="Last Week - 36hrs"
          />
        </div>

        <div className="item">
          <Card
            color="soft-blue"
            title="Play"
            time="10hrs"
            date="Last Week - 8hrs"
          />
        </div>

        <div className="item">
          <Card
            color="light-red"
            title="Study"
            time="4hrs"
            date="Last Week - 4hrs"
          />
        </div>

        <div className="item">
          <Card
            color="lime-green"
            title="Exercise"
            time="4hrs"
            date="Last Week - 5hrs"
          />
        </div>

        <div className="item">
          <Card
            color="violet"
            title="Social"
            time="5hrs"
            date="Last Week - 10hrs"
          />
        </div>

        <div className="item">
          <Card
            color="soft-orange"
            title="Self Care"
            time="2hrs"
            date="Last Week - 2hrs"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
