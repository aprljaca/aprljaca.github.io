import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Third year Computer Science undergraduate student with knowledge of software development and problem solving skills. Developing new and innovative projects with a desire for improvement in the field. Hoping for a challenging environment that provides generous opportunities for learning and advancement in my career."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 45,
      }}
    />
  );
}

export default Type;
