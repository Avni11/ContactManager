import React from "react";
function Form() {
  return (
    <div>
      <form>
        <label for="name">Name:</label>
        <input type="text" />
        <br></br>
        <label for="password">Password:</label>
        <input type="password" />
        <br></br>
      </form>
    </div>
  );
}

export default Form;
