import { useEffect } from "react";
import { useCoffeeContext } from "../contexts/CoffeeContext";
import useFetch from "../hooks/useFetch";
import PageContainer from "../layouts/PageContainer";
import {  useNavigate } from "react-router-dom";

const  IngredientsPage = () => {
  const { ingredients, setIngredients,  }=useCoffeeContext()
  const { data, loading, error, fetchData } = useFetch(
    "https://crudapi.co.uk/api/v1/ingredients", 
    "GET", 
    []
  );
  const navigate = useNavigate ()

  
  useEffect(() => {
    if (data.length > 0) {
      setIngredients(data);
    }
  }, [data, setIngredients]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching ingredients. Try again.</p>;
  }

  
    const handleAdd = () => {
    navigate(`/coffee`);
  };


  return (
    <PageContainer>
      <div>
      <h1>Ingredient List</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Flavor</th>
            
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient) => (
              <tr key={ingredient._uuid}>
                <td>{ingredient.name}</td>
                <td>{ingredient.price} GEL</td>
                <td>{ingredient.flavor}</td>
                <td>
                <button onClick={handleAdd}>Add Coffe</button>
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





