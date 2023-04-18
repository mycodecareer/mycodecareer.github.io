import PropTypes from "prop-types";

// Function that returns a function based on the name passed in.  The
// returned function is used to handle the form submit event.
function getResourceFunction(funcName) {
  console.log("getResourceFunction: " + funcName);
  switch (funcName) {
    case "handleSumbit1":
      return handleSumbit1;
    case "handleSumbit2":
      return handleSumbit2;
    default:
      return null;
  }
}
getResourceFunction.propTypes = {
  funcName: PropTypes.string.isRequired,
};

function handleSumbit1(event) {
  event.preventDefault();
  // do something
  console.log("handleSumbit1");
}

function handleSumbit2(event) {
  event.preventDefault();
  // do something
  console.log("handleSumbit2");
}

export default getResourceFunction;
