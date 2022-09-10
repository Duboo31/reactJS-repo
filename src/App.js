import { useEffect } from "react";
import { useState } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("created");
    return () => {console.log("destroy")};
  },[])
  return (
    <h1>Hello!</h1>
  )
}

const App = () => {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(cur => !cur);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>    
    )
}

export default App;
