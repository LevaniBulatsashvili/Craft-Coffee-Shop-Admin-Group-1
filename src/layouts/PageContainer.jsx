import styles from "./styles/PageContainer.module.css";

function PageContainer({ children }) {
  return <main className={styles.main}>{children}</main>;
}

export default PageContainer;
