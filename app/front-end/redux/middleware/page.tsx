import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Middleware() {
  return (
    <div>
      <h1>Middleware</h1>
      <Thunks />
      <ThunksInSlices />
      <br />
    </div>
  );
}

function Thunks() {
  return (
    <div>
      <h2>Thunks</h2>
      <p>
        <code>createAsyncThunk</code> takes an <em>action</em> string and a{" "}
        <em>callback</em> function as parameters. It generates a{" "}
        <em>thunk action creator</em> that will run the callback and
        automatically dispatch promise lifecycle actions. This automates
        dispatching of pending, fulfilled and rejected action promises.
      </p>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUser } from './api'
const fetchUserById = createAsyncThunk(
  'users/fetchUserById', // action type
  async (arg, thunkAPI) => { // payload creator
    const response = await fetchUser(arg);
    return response.json();
  }
)`}</SyntaxHighlighter>
      <p>
        The <code>arg</code> parameter will be equal to the first argument
        passed into the <em>thunk action creator</em>. If there are several
        arguments, they need to be bundled in an object.
      </p>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`fetchUserById(235) // arg = 235
searchUsers({ firstName: 'Carl', lastName: 'von Linné' }) // two arguments`}</SyntaxHighlighter>
      <p>
        The <code>thunk action creator</code> will provide three action types:
      </p>
      <ul>
        <li>resourceType/actionType/pending</li>
        <li>resourceType/actionType/fulfilled</li>
        <li>resourceType/actionType/rejected</li>
      </ul>
      <p>
        The corresponding action type strings would be:{" "}
        <code>users/fetchUserById/pending</code>. To access the individual
        action type creators, reference them by e.g.{" "}
        <code>fetchUserById.pending</code>.
      </p>
    </div>
  );
}

function ThunksInSlices() {
  return (
    <div>
      <h2>Thunks in slices</h2>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`export const loadRecipes = createAsyncThunk(
  "allRecipes/getAllRecipes",
  async () => {
    const data = await fetch("api/recipes?limit=10");
    const json = await data.json();
    return json;
  }
);

const sliceOptions = {
  name: "allRecipes",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [loadRecipes.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.recipes = action.payload;
    },
    [loadRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

export const allRecipesSlice = createSlice(sliceOptions);`}</SyntaxHighlighter>
    </div>
  );
}
