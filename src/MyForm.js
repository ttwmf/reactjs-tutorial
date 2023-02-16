const { useState } = require("react");

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(inputs);
    setInputs((values) => ({ name: "Thai", age: 29 }));
  };

  const handleSubmit = () => {
    console.log(inputs);
    alert(inputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleOnChange}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleOnChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default MyForm;
