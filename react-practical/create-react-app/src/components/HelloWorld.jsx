const HelloWorld = () => {
  const hello = "Hello World";
  const isTrue = true;
  return (
    <div className="HelloWorld">
      <h1>{hello}</h1>
      <h2>How are you?</h2>
      <img src="https://arepa.s3.amazonaws.com/react.png" alt="React logo" />
      {isTrue ? <h4>This is true</h4> : <h4>This is false</h4>}
      {isTrue && <h4>True :)</h4>}
      {/* &&: If it is true show me this, if not nothing happens */}
    </div>
  );
};

export default HelloWorld;
