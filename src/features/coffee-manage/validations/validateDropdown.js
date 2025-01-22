export default function validateArray(arr) {
  if (Array.isArray(arr) && arr.length === 0) return "cannot be empty!";

  return null;
}
