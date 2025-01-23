import styles from "./styles/CoffeeManagePage.module.css";
import Form from "../features/coffee-manage/components/Form/Form";
import { useLocation } from "react-router-dom";
import PageContainer from "../layouts/PageContainer";

function CoffeeManagePage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const coffeeId = queryParams.get("id");

  return (
    <PageContainer>
      <div className={styles["coffee-manage"]}>
        <h1>{coffeeId ? "edit" : "add"} coffee</h1>

        <Form coffeeId={coffeeId} />
      </div>
    </PageContainer>
  );
}

export default CoffeeManagePage;
