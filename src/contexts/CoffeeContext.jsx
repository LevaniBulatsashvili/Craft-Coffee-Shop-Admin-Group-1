import { createContext, useContext, useMemo, useState } from "react";

const CoffeeContext = createContext(null);

const CoffeeContextProvider = ({ children }) => {
  const [coffees, setCoffees] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const contextValue = useMemo(
    () => ({
      coffees,
      ingredients,
      findCoffee: (coffeeId) =>
        coffees.find((coffee) => coffee._uuid === coffeeId),
      setCoffees: (newCoffees) => setCoffees(newCoffees),
      addCoffee: (newCoffee) => setCoffees((prev) => [newCoffee, ...prev]),
      editCoffee: (updatedCoffee) => {
        const coffeeIndex = coffees.findIndex(
          (coffee) => coffee._uuid === updatedCoffee._uuid
        );

        const newCoffees = [...coffees];
        newCoffees[coffeeIndex] = updatedCoffee;
        setCoffees(newCoffees);
      },
      deleteCoffee: (coffeeId) =>
        setCoffees((prev) =>
          prev.filter((coffee) => coffee._uuid !== coffeeId)
        ),
      findIngredient: (ingredientId) =>
        ingredients.find((ingredient) => ingredient._uuid === ingredientId),
      setIngredients: (newIngredients) => setIngredients(newIngredients),
      addIngredient: (newIngredient) =>
        setIngredients((prev) => [newIngredient, ...prev]),
      editIngredient: (updatedIngredient) => {
        const ingredientIndex = ingredients.findIndex(
          (ingredient) => ingredient._uuid === updatedIngredient._uuid
        );

        const newIngredients = [...ingredients];
        newIngredients[ingredientIndex] = updatedIngredient;
        setIngredients(newIngredients);
      },
      deleteIngredient: (ingredientId) =>
        setIngredients((prev) =>
          prev.filter((ingredient) => ingredient._uuid !== ingredientId)
        ),
    }),
    [coffees, ingredients]
  );

  return (
    <CoffeeContext.Provider value={contextValue}>
      {children}
    </CoffeeContext.Provider>
  );
};

export const useCoffeeContext = () => {
  const contextValue = useContext(CoffeeContext);
  if (!contextValue)
    throw new Error("Your component is not inside CoffeeContextProvider!");

  return contextValue;
};

export default CoffeeContextProvider;
