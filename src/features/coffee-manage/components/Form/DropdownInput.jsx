import { useState } from "react";
import styles from "./styles/DropdownInput.module.css";

function DropdownInput({ name, items, selectedItems, onSelectItem, error }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const isSelected = (itemId) =>
    selectedItems.some((item) => item._uuid === itemId);

  return (
    <div className={styles["dropdown-input"]}>
      <label>{name}</label>
      <div className={styles["dropdown"]}>
        <button type="button" onClick={toggleDropdown}>
          choose {`${name} `}
          <span
            className={`
              material-symbols-outlined 
              ${isOpen && styles["active"]}`}
          >
            arrow_back_ios
          </span>
        </button>
        {isOpen && (
          <div className={styles["dropdown-content"]}>
            {items.map((item) => (
              <div
                key={item._uuid}
                className={styles[`${isSelected(item._uuid) && "selected"}`]}
                onClick={() => onSelectItem(item)}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && (
        <p>
          {name} {error}
        </p>
      )}
    </div>
  );
}

export default DropdownInput;
