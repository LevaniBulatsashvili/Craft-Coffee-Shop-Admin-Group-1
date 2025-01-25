import styles from "./styles/IngredientManagePage.module.css";
import Form from "../features/ingredient-manage/components/Form/Form";
import { useLocation } from "react-router-dom";
import PageContainer from "../layouts/PageContainer";

function IngredientManagePage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const ingredientId = queryParams.get("id");

  return (
    <PageContainer>
      <div className={styles["ingredient-manage"]}>
        <h1>{ingredientId ? "edit" : "add"} ingredient</h1>

        <Form ingredientId={ingredientId} />
      </div>
    </PageContainer>
  );
}

export default IngredientManagePage;
