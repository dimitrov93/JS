import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import Section from "./components/Section";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Heading title={"Hello1"} />
      <h1>Hello2</h1>
      <Section title="Title 3">This is my section</Section>
      <Counter setCount={setCount}>Count is {count} </Counter>
      <List
        items={["coffe", "tacos", "code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  );
}

export default App;
