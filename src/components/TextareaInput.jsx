import styles from "./styles/TextareaInput.module.css";

function TextareaInput({ name, textareaRef, defaultValue, error }) {
  return (
    <div className={styles["textarea-input"]}>
      <label htmlFor="description">{name}</label>
      <textarea
        type="text"
        id={name}
        name={name}
        placeholder={`enter ${name}`}
        defaultValue={defaultValue}
        ref={textareaRef}
      />
      {error && (
        <p>
          {name} {error}
        </p>
      )}
    </div>
  );
}

export default TextareaInput;
