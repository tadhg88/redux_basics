import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import { selectCount, selectUser, selectUserId } from './selectors/selector';
import { useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.count);
  const selectorCount = useSelector(selectCount);
  const userIm = useSelector(selectUser);
  console.log(userIm);
  const user = userIm.toJS();
  console.log(user);

  const userId = useSelector(selectUserId);

  const voters = [
    "Anthony Sistilli",
    "Bob Smith",
    "Stephanie Foo",
    "Kevin Ma"
  ];
  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h1>User: '{user.id}' - {userId}</h1>
      <h2>Total Votes: {count} --- Total Selector Votes: {selectorCount}</h2>
      {voters.map((voter) => (
        <Counter name={voter} key={voter} />
      ))}
    </div>
  );
}

export default App;
