import styles from "./styles/Input.module.css";

function Input({ name, type = "text", inputRef, defaultValue, error }) {
  return (
    <div className={styles["input"]}>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={`enter ${name}`}
        ref={inputRef}
        defaultValue={defaultValue}
        step="any"
      />
      {error && (
        <p>
          {name} {error}
        </p>
      )}
    </div>
  );
}

export default Input;
