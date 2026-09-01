import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <h1>Redux Toolkit</h1>
      <TookitSetup />
      <h2>Tools</h2>
      <CreateSlice />
      <ConfigureStore />
      <br />
    </div>
  );
}

function TookitSetup() {
  return (
    <div>
      <h2>Prerequisits</h2>
      <p>
        Install <Link href="/front-end/react/redux">Redux</Link> and its
        toolkit:
      </p>
      <SyntaxHighlighter
        language="bash"
        style={dracula}
      >{`npm install react-redux @reduxjs/toolkit`}</SyntaxHighlighter>
      <p>
        <strong>Redux Toolkit</strong> has built-in TS type definitions.
      </p>
    </div>
  );
}

function CreateSlice() {
  return (
    <div>
      <h3>Create Slice</h3>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`import { createSlice } from "@reduxjs/toolkit"

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  intitalState: [],
  reducers: {
    addBookmark: (state, action) => {
      return [...state, action.payload];
    },
    removeBookmark: (state, action) => {
      return state.filter((bookmark) => bookmark.id !== action.payload.id);
    },
  }
})`}</SyntaxHighlighter>
      <p>
        <code>createSlice</code> needs one configuration object:
      </p>
      <ul>
        <li>
          <code>name:</code> name of the slice
        </li>
        <li>
          <code>initialState: </code> initializes its state
        </li>
        <li>
          <code>reducers: </code> a key-value object defining its actions, where
          key = name and value = function
        </li>
      </ul>
      <p>
        The Redux Toolkit makes use of{" "}
        <Link
          href="https://immerjs.github.io/immer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Immer
        </Link>{" "}
        which guarantees immutable state of a slice. So using{" "}
        <code>state.push()</code> instead of{" "}
        <code>return [...state, action.payload]</code> actually works just fine.
      </p>
      <p>
        <code>createSlice</code> returns an object:
      </p>
      <SyntaxHighlighter language="js" style={dracula}>{`{
  name: 'bookmarks'
  reducer: (state, action) => newState,
  actions: {
    addBookmark: (payload) => ({type: 'bookmarks/addBookmark', payload)},
    removeBookmark: (payload) => ({type: 'bookmarks/removeBookmark', payload)}
  },
}`}</SyntaxHighlighter>
      <p>A slice`s actions can now be destructured like this:</p>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`export const { addBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;`}</SyntaxHighlighter>
      <p>
        The <code>bookmarksSlice.reducer</code> can now be integrated to the
        store.
      </p>
    </div>
  );
}

function ConfigureStore() {
  return (
    <div>
      <h3>Configure Store</h3>
      <p>
        <code>configureStore</code> combines <code>createStore</code> and{" "}
        <code>combineReducers</code> in one expression:
      </p>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`import { configureStore } from '@reduxjs/toolkit'
import bookmarksReducer from './features/bookmarks/bookmarksSlice'
import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
  reducer: {
    bookmarks: bookmarksReducer,
    filters: filtersReducer
  }
})

export default store`}</SyntaxHighlighter>
    </div>
  );
}
