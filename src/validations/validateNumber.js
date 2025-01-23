export default function validateNumber(inputValue) {
  if (inputValue.trim() === "") return "cannot be empty";

  const num = Number(inputValue);

  if (isNaN(num)) return "must be a valid number";

  return null;
}
