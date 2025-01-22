export default function validateTextarea(inputValue) {
  inputValue = inputValue.trim();

  if (inputValue === "") "cannot be empty!";

  if (inputValue.length < 10) return "must be at least 10 characters long!";

  return null;
}
