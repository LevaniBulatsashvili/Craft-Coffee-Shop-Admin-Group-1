import styles from "./styles/TextareaInput.module.css";

function TextareaInput({ name, textareaRef, error }) {
  return (
    <div className={styles["textarea-input"]}>
      <label htmlFor="description">{name}</label>
      <textarea
        type="text"
        id={name}
        name={name}
        placeholder={name}
        ref={textareaRef}
      />
      {error && <p>{name} {error}</p>}
    </div>
  );
}

export default TextareaInput;
