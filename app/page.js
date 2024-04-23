"use client"

import { useState } from "react"

export default function Home() {

  // state för listan
const [todos, setTodos] = useState([]);
 // state för textfältet
const [text, setText] = useState("");


function addTodo() {
  const newTodo = {
    id: Date.now(), // Generera ett unikt id för varje todo(för att kunna remove)
    text: text, // Texten som användaren har skrivit
  }
  // Kopiera listan som redan finns, och lägg till det användaren har skrivit
  setTodos([...todos, newTodo]);
  // Återställ textfältet så det blir tomt när man trycker på add-btn
  // (tom sträng)
  setText("");
}

// Funktion som tar emot id som argument för att kunna ta bort
function removeTodo(id) {
  setTodos(todos.filter((todo) => todo.id !== id)); // filtrera bort todo med id:et
}

  return (
    <main>
      <h2>My To-do List</h2>
      <input
        type="text"
        value={text}
        placeholder="Enter your task here.."
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={addTodo}>Add</button>
      {/* Skapa en ul, som mappar igenom listan, och renderar
      allt innehåll som en lista. */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}
          {/* funktion som skickar med det akutella id:et som argument som ska tas bort */}
          <button onClick={() => removeTodo(todo.id)}>Remove</button></li>
        ))}
      </ul>
    </main>
  );
}
