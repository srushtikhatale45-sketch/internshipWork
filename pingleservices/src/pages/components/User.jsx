import React, { useState } from "react";

function User({ id, firstName, hobbies }) {
  console.log(id, firstName, hobbies);
  const [count, setCount] = useState(1);
  const increaseCount = () => {
    setCount((prev) => {
      return prev - 1;
    });
  };
  return (
    <div>
      <div className="border m-5 bg-gray-600">
        <div>Id:{id}</div>
        <div>firstName:{firstName}</div>
        <div>count:{count}</div>

        <div>Hobbies:{hobbies}</div>
        <div>
          {" "}
          <button
            className="border bg-white text-black rounded-2xl m-2 p-2"
            onClick={increaseCount}
          >
            Add
          </button>
          <button className="border bg-white text-black rounded-2xl m-2 p-2">
            Sub
          </button>
        </div>

        {/* <div>{user.xyz}</div> */}
      </div>
    </div>
  );
}

export default User;
