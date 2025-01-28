import styles from "./styles/Error.module.css";


function Error({ text }) {

  return (
    <div className={styles.error}>
      <h1>{text}</h1>
    </div>
  );
}

export default Error