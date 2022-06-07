import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";

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
