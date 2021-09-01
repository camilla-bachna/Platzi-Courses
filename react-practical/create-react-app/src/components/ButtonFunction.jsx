import { useState } from "react";

const Button = (props) => {
  /*    extract the text value from props => const { text, text2, input } = props;  
  const { text } = props;*/

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>You clicked the button {count} times</h1>
      <button type="button" onClick={handleClick}>
        Click
      </button>
      {/* <button type="button">{text}</button> without destructuring  <button type="button">{props.text}</button>  */}
    </div>
  );
};

export default Button;
