import "./App.css";
import UserCard from "./components/UserCard.js";
import Card from "./components/Card.js";

function App() {
  return (
    <main className="main-container">
      <UserCard />

      <Card
        color="light-orange"
        title="Work"
        time="32hrs"
        date="Last Week - 36hrs"
      />
      <Card
        color="soft-blue"
        title="Play"
        time="10hrs"
        date="Last Week - 8hrs"
      />
      <Card
        color="light-red"
        title="Study"
        time="4hrs"
        date="Last Week - 4hrs"
      />
      <Card
        color="lime-green"
        title="Exercise"
        time="4hrs"
        date="Last Week - 5hrs"
      />
      <Card
        color="violet"
        title="Social"
        time="5hrs"
        date="Last Week - 10hrs"
      />
      <Card
        color="soft-orange"
        title="Self Care"
        time="2hrs"
        date="Last Week - 2hrs"
      />
    </main>
  );
}

export default App;
