import PageContainer from "../layouts/PageContainer";
import { useEffect } from "react";
import { useCoffeeContext } from "../contexts/CoffeeContext";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import styles from "./styles/IngredientPage.module.css";
import ingredientImg from "../assets/ingredient.png";
import Error from "../components/Error";
import Spinner from "../components/Spinner";

const IngredientsPage = () => {
  const { ingredients, setIngredients } = useCoffeeContext();
  const {
    data,
    loading: ingredientsLoading,
    error: ingredientsErr,
  } = useFetch("https://crudapi.co.uk/api/v1/ingredients", "GET", []);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.length > 0) {
      setIngredients(data);
    }
  }, [data, setIngredients]);

  const handleEdit = (id) => navigate(`/ingredient/manage?id=${id}`);
  const handleAddButton = () => navigate(`/ingredient/manage`);

  if (ingredientsLoading) return <Spinner />;
  if (ingredientsErr) return <Error text={ingredientsErr.message} />;
  return (
    <PageContainer>
      <div className={styles.ingredientList}>
        <h1>Ingredient List</h1>
        <button onClick={handleAddButton}>Add Ingredient</button>
      </div>

      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Ingredient Name</th>
              <th>Price</th>
              <th>Flavor</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody>
            {ingredients.map((ingredient) => (
              <tr key={ingredient._uuid}>
                <td>
                  <img src={ingredientImg} alt="ingredient image" />
                  {ingredient.name}
                </td>
                <td>{ingredient.price}</td>
                <td>{ingredient.flavor}</td>
                <td>
                  <button onClick={() => handleEdit(ingredient._uuid)}>
                    See details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
};

export default IngredientsPage;
