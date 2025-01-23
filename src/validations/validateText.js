export default function validateText(inputValue) {
  inputValue = inputValue.trim();

  if (inputValue === "") return "cannot be empty!";

  if (inputValue.length < 4) return "must be at least 4 characters long!";

  return null;
}
