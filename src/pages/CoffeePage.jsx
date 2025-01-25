import coffeeImg from '../assets/coffee.webp'
import { useEffect } from "react";
import PageContainer from "../layouts/PageContainer";
import { useCoffeeContext } from "../contexts/CoffeeContext";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import styles from "./styles/CoffeePage.module.css";
import calculatePrice from "../utils/calculatePrice";
import Spinner from "../components/Spinner";
import Error from "../components/Error";

const CoffeePage = () => {
  const { coffees, setCoffees, setIngredients } = useCoffeeContext(); // from contextApi
  const {
    data: coffeeData,
    loading: coffeeLoading,
    error: coffeeError,
  } = useFetch("https://crudapi.co.uk/api/v1/coffees", 
   "GET", 
   []
  );
   
   const {
    data: ingredientData, 
    loading: ingredientLoading,
    error: ingredientError,} = useFetch
   ("https://crudapi.co.uk/api/v1/ingredients", 
   "GET", 
    []
  );

   const navigate= useNavigate()

   useEffect(() => {
    if (coffeeData.length > 0) setCoffees(coffeeData);
    if (ingredientData.length > 0) setIngredients(ingredientData);
  }, [coffeeData, ingredientData, setIngredients, setCoffees]);


  if (coffeeLoading || ingredientLoading) {
    return <Spinner />;
  }

  if (coffeeError || ingredientError) {
    return (
      <Error
        text={coffeeError ? coffeeError.message : ingredientError.message}
      />
    );
  }



const handleEdit = (id) => {
  navigate(`/coffee/manage?id=${id}`);
};

const handleAddButton = () => {
  navigate(`/coffee/manage`);
};



return (
  <PageContainer>
    <div className={styles.coffeeList}>
      <h1>Coffee List</h1>
      <button onClick={handleAddButton}>Add Coffee</button>
    </div>

    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Coffee Title</th>
            <th>Country</th>
            <th>Caffeine</th>
            <th>Total Price</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          {coffees.map((coffee) => (
            <tr key={coffee._uuid}>
              <td>
                <img src={coffeeImg} alt="coffee image" />
                {coffee.title}
              </td>
              <td>{coffee.country}</td>
              <td>{coffee.caffeine} mg</td>
              <td>{calculatePrice(coffee.ingredients)} ₾</td>
              <td>
                <button onClick={() => handleEdit(coffee._uuid)}>
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

export default CoffeePage;