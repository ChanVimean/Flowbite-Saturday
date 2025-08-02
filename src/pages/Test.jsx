import React, { useState } from "react";

const Test = () => {
  // const [count, setCount] = useState(0);

  // const handleAdd = () => setCount(count + 1);

  // const greeting = false;

  const [show, setShow] = useState(true);

  return (
    <div>
      {/* <section className="flex space-x-10">
        <button onClick={handleAdd} className="font-extrabold text-3xl">+</button>

        <p>{count}</p>

        <button onClick={() => setCount(count - 1)}>-</button>
      </section> */}

      {/* <section>
        <h1>{greeting ? "Good Morning" : "Good afternoon"}</h1>
      </section> */}

      <section>
        <button
          onClick={() => setShow(!show)}
          className="px-2 py-1 bg-sky-300 rounded"
        >
          {show ? "Hide Message" : "Show Message"}
        </button>

        <p
          className={`
            ${show ? "block" : "hidden"}
            bg-blue-400
          `}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
          consectetur dolore repellendus magni vel voluptate earum quibusdam
          illo nostrum consequuntur!
        </p>
      </section>
    </div>
  );
};

export default Test;
