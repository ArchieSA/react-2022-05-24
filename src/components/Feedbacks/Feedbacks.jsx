import React from "react";

export const Feedbacks = ({feedbacks}) => {
    return (
        <div>
          <p>Feedbacks</p>
          <ul>
              {feedbacks.map(item => {
                return <li>{item}</li>
              })}
            </ul>
        </div>
      );
}