import styles from "./styles/Form.module.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRequest from "../../../../hooks/useRequest";
import { useCoffeeContext } from "../../../../contexts/CoffeeContext";
import Input from "../../../../components/Input";
import TextareaInput from "../../../../components/TextareaInput";
import Control from "../../../../components/Control";
import validateText from "../../../../validations/validateText";
import validateNumber from "../../../../validations/validateNumber";
import validateTextarea from "../../../../validations/validateTextaria";

function Form({ ingredientId }) {
  const navigate = useNavigate();
  const { sendRequest } = useRequest();
  const [ingredient, setIngredient] = useState(null);
  const { findIngredient, addIngredient, editIngredient, deleteIngredient } =
    useCoffeeContext();

  const nameRef = useRef(null);
  const flavorRef = useRef(null);
  const strengthRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);
  const [errors, setErrors] = useState({
    name: null,
    flavor: null,
    strength: null,
    price: null,
    description: null,
  });
  //
  useEffect(() => {
    if (ingredientId) {
      const ingredientToEdit = findIngredient(ingredientId);
      ingredientToEdit
        ? setIngredient(ingredientToEdit)
        : navigate("/ingredient/manage");
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const nameErr = validateText(nameRef.current.value);
    const flavorErr = validateText(flavorRef.current.value);
    const strengthErr = validateText(strengthRef.current.value);
    const priceErr = validateNumber(priceRef.current.value);
    const descriptionErr = validateTextarea(descriptionRef.current.value);

    if (nameErr || flavorErr || strengthErr || priceErr || descriptionErr)
      return setErrors({
        name: nameErr,
        flavor: flavorErr,
        strength: strengthErr,
        price: priceErr,
        description: descriptionErr,
      });

    const ingredient = {
      name: nameRef.current.value,
      flavor: flavorRef.current.value,
      strength: strengthRef.current.value,
      price: priceRef.current.value,
      description: descriptionRef.current.value,
    };

    if (!ingredientId) {
      sendRequest("https://crudapi.co.uk/api/v1/ingredients", "POST", [
        ingredient,
      ]);
      // addIngredient(ingredient); wont work properly since _uuid wont be available
    } else {
      ingredient._uuid = ingredientId;
      sendRequest(
        `https://crudapi.co.uk/api/v1/ingredients/${ingredientId}`,
        "PUT",
        ingredient
      );
      editIngredient(ingredient); // wont be the true ingredient data since its missing alot of keys given by the backend
    }

    navigate("/ingredient");
  };

  const onIngredientDelete = (ingredientId) => {
    sendRequest(
      `https://crudapi.co.uk/api/v1/ingredients/${ingredientId}`,
      "DELETE"
    );
    deleteIngredient(ingredientId);
    navigate("/ingredient");
  };

  return (
    <form className={styles["form"]} onSubmit={onSubmit}>
      <div>
        <div>
          <Input
            name="name"
            inputRef={nameRef}
            defaultValue={ingredient && ingredient.name}
            error={errors.name}
          />
          <Input
            name="flavor"
            inputRef={flavorRef}
            defaultValue={ingredient && ingredient.flavor}
            error={errors.flavor}
          />
          <Input
            name="strength"
            inputRef={strengthRef}
            defaultValue={ingredient && ingredient.strength}
            error={errors.strength}
          />
        </div>

        <div>
          <Input
            name="price"
            type="number"
            inputRef={priceRef}
            defaultValue={ingredient && ingredient.price}
            error={errors.price}
          />
          <TextareaInput
            name="description"
            defaultValue={ingredient && ingredient.description}
            textareaRef={descriptionRef}
            error={errors.description}
          />
        </div>
      </div>
      <Control
        itemId={ingredientId}
        onDelete={onIngredientDelete}
        name="ingredient"
      />
    </form>
  );
}

export default Form;
