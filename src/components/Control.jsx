import styles from "./styles/Control.module.css";

function Control({ name, itemId, onDelete }) {
  return (
    <div className={styles["control"]}>
      {itemId && (
        <button
          onClick={() => onDelete(itemId)}
          className={styles["delete-btn"]}
          type="button"
        >
          delete {name}
        </button>
      )}
      <button type="submit">
        {itemId ? "edit" : "add"} {name}
      </button>
    </div>
  );
}

export default Control;
