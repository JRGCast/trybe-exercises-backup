import React from 'react';
import './App.css';

const tasks = ["Acordar", "Meditar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];

const App = () => ( <ul>{ tasks.map(task => <li>{ task }</li>) }</ul> );

export default App;


