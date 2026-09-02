import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Composition() {
  return (
    <div>
      <ReduxReducerComposition />
      <br />
    </div>
  );
}

function ReduxReducerComposition() {
  return (
    <div>
      <h1>Reducer Composition</h1>
      <p>
        With a growing <code>store</code> a single <strong>reducer</strong>{" "}
        becomes increasingly difficult to handle. The solution is a{" "}
        <em>reducer composition</em>:
      </p>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`import { createStore, combineReducers } from "redux";
const intitalTodos = [
    { id: 0, name: "clean bathroom", done: false },
    { id: 1, name: "grocery shopping", done: true },
  ];

const todosReducer = (todos = initialTodos, action) => {
  switch (action.type) {
    case 'todos/addTodo':
      return [...todos, action.payload]
    case 'todos/toggleTodo':
      return todos.map(todo => {
        return (todo.id === action.payload.id) ?
          { ...todo, completed: !todo.completed } :
          {...todo};
      });
    default:
      return todos;
  }
};

const initialAppointments = [
  { id: 0, name: "dentist", done: false },
  { id: 1, name: "pick up kids", done: false },
];

const appointmentsReducer = (appointments = initialAppointments, action) => {
  switch (action.type) {
    case 'appointments/addAppointment':
    return [...appointments, action.payload]
    case 'appointments/toggleAppointment':
    return appointments.map(appointment => {
        return (appointment.id === action.payload.id) ?
        { ...appointment, completed: !appointment.completed } :
        {...appointments};
      });
    default:
      return appointments;
  }
};

const reducers = {
  todos: todosReducer,
  appointments: appointmentsReducer,
};

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);`}</SyntaxHighlighter>
      <p>
        In the above example, <code>combineReducers</code> is used. We can
        further shorten this to:
      </p>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`export const store = createStore(combineReducers({
  todos: todosReducer,
  appointments: appointmentsReducer,
}));`}</SyntaxHighlighter>
      <p>
        <strong>Important: </strong> <code>store</code> needs to be exported!
      </p>
    </div>
  );
}
