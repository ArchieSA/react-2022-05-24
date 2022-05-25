import React from "react";

export const Feedbacks = ({feedbacks}) => {
    return (
        <div>
          <p>Feedbacks</p>
          <ul>
              {feedbacks.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
        </div>
      );
}