import React, { useState} from "react";
import "./App.css";
import Counter from "./components/Counter";
import { selectCounter, selectUser, selectUserId, selectUserSelector } from './selectors/selector';
import { useDispatch, useSelector } from 'react-redux';
import UserList from './components/UserList';
import { incrementBy } from "./actions/actionCreators";

function App() {
  const count = useSelector((state) => state.counterSlice.count);
  const selectorCount = useSelector(selectCounter);
  console.log('selectorCount', selectorCount);
  
 
  const userIm = useSelector(selectUser);
  const user = userIm.toJS();
  const userId = useSelector(selectUserId);

  const userSelectorUser = useSelector(selectUserSelector).toJS();
  console.log('userSelectorUser: ', userSelectorUser);
 

  const voters = [
    "Anthony Sistilli",
    "Bob Smith",
    "Stephanie Foo",
    "Kevin Ma"
  ];

  const [incrementValue, setIncrementValue] = useState(1);
  const handleChange = event => {
    console.log('value is:', event.target.value);
    setIncrementValue(parseInt(event.target.value));
  }

  const dispatch = useDispatch();
  const handleIncrementByClick = () => {
    console.log('incrementValue is:', incrementValue);
    console.log('typeof', typeof incrementValue);

    const actionIncrementBy = incrementBy(incrementValue);
    console.log('actionIncrementBy', actionIncrementBy);
    dispatch(actionIncrementBy);
  }

  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h1>selectUser - Name: '{user.name}' - Id: '{user.id}' - selectUserId: {userId}</h1>
      <h1>--- userSelectorUser --- id: {userSelectorUser.id}, name: {userSelectorUser.name}</h1>
      <h2>Total Votes: {count} --- Total Votes (Redux): {selectorCount}</h2>
      <div>
        <button onClick={handleIncrementByClick}>Increment by</button>
        <br/>
        <input type="number" onChange={handleChange} value={incrementValue}></input>
      </div>
      {voters.map((voter) => (
        <Counter name={voter} key={voter} />
      ))}

      <h1>UserList</h1>
      <UserList/>
    </div>
  );
};

export default App;
