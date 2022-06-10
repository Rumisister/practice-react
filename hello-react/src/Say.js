import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕");
  const onClickLeave = () => setMessage("수고");

  const [color, serColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "teal" }} onClick={() => serColor("teal")}>
        teal
      </button>
      <button style={{ color: "orange" }} onClick={() => serColor("orange")}>
        orange
      </button>
      <button style={{ color: "blue" }} onClick={() => serColor("blue")}>
        blue
      </button>
    </div>
  );
};

export default Say;
