import React, { Component } from "react";

export default function Logbook(props) {
  const { previousSelection, userStory } = props;

  return (
    <div className="recordatorio">
      <h3>Selección anterior: {previousSelection}</h3>
      <h4>Historial de opciones elegidas: </h4>
      <ul>
        {userStory.map((option, index) => (
          <li key={index + option + index++}>{option}</li>
        ))}
      </ul>
    </div>
  );
}
