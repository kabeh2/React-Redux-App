import React from "react";
import "./App.scss";
import CardList from "./components/CardList";
import Pagination from "./components/Pagination";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <Typography variant="h3" gutterBottom color="primary" align="center">
        List of Ranked Cryptocurrencies
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        color="secondary"
        align="center"
      >
        React - Async Redux Practice with Coin Gecko API & Material UI Styling
      </Typography>
      <CardList />
      <Pagination />
    </div>
  );
}

export default App;
