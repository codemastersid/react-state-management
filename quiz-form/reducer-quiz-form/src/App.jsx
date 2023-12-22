import { useReducer } from "react";

const initialState = {
  answer: "",
  error: null,
  status: "typing",
};

const actions = {
  setAnswer: "SET_ANSWER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setAnswer:
      return { ...state, answer: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_STATUS":
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { answer, error, status } = state;

  if (status === "okey") {
    return <h1>You were right!</h1>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_STATUS", payload: "submitting" });
    try {
      await submitForm(answer);
      dispatch({ type: "SET_STATUS", payload: "okey" });
    } catch (err) {
      dispatch({ type: "SET_STATUS", payload: "typing" });
      dispatch({ type: "SET_ERROR", payload: err });
    }
  };

  const handleTextAreaChange = (e) => {
    dispatch({ type: "SET_ANSWER", payload: e.target.value });
  };

  return (
    <>
      <h2>City Quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinking water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextAreaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
      </form>
      {error !== null && <p className="Error">{error.message}</p>}
    </>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}

export default App;
