// REDUCER
function formReducer(currentState, action) {
  switch (action.type) {
    case "SUBMIT":
      currentState.user.firstName = action.payload.user.firstName;
      currentState.user.lastName = action.payload.user.lastName;
      return currentState;
      break;
    default:
      console.log("In Default");
      return currentState;
  }
}

var state = {
  user: {
    firstName: "",
    lastName: ""
  }
};
var store = Redux.createStore(
  formReducer,
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({
      serialize: true
    })
);

console.log(store);

function render() {
  console.log("In Render");
  console.log(store.getState());
}

store.subscribe(render);

document.getElementById("btn").addEventListener("click", function() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const payload = {
    user: {
      firstName,
      lastName
    }
  };
  store.dispatch({ type: "SUBMIT", payload });
});
