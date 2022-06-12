import "./App.css";
import MyComponent from "./Component/MyComponent";
import Counter from "./Component/Counter";
import Say from "./Component/Say";

const App = () => {
  return (
    <>
      <MyComponent name="이루미주인" favoriteNumber={3}>
        이하영짱
      </MyComponent>
      <Counter />
      <Say />
    </>
  );
};

export default App;
