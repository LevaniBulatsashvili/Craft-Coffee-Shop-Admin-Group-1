import styles from "./styles/Form.module.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRequest from "../../../../hooks/useRequest";
import { useCoffeeContext } from "../../../../contexts/CoffeeContext";
import ImageInput from "./ImageInput";
import DropdownInput from "./DropdownInput";
import Input from "../../../../components/Input";
import TextareaInput from "../../../../components/TextareaInput";
import Control from "../../../../components/Control";
import validateText from "../../validations/validateText";
import validateNumber from "../../validations/validateNumber";
import validateTextarea from "../../validations/validateTextaria";
import validateDropdown from "../../validations/validateDropdown";

function Form({ coffeeId }) {
  const navigate = useNavigate();
  const { sendRequest } = useRequest();
  const [coffee, setCoffee] = useState(null);
  const { ingredients, findCoffee, addCoffee, editCoffee, deleteCoffee } =
    useCoffeeContext();
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const titleRef = useRef(null);
  const countryRef = useRef(null);
  const caffeineRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const [errors, setErrors] = useState({
    title: null,
    country: null,
    caffeine: null,
    description: null,
    ingredients: null,
  });

  useEffect(() => {
    if (coffeeId) {
      const coffeeToEdit = findCoffee(coffeeId);
      coffeeToEdit ? setCoffee(coffeeToEdit) : navigate("/coffee/manage");
    }
  }, []);

  const onSelectIngredient = (selectedIngredient) =>
    setSelectedIngredients((prev) =>
      prev.some((ingredient) => ingredient._uuid === selectedIngredient._uuid)
        ? prev.filter(
            (ingredient) => ingredient._uuid !== selectedIngredient._uuid
          )
        : [selectedIngredient, ...prev]
    );

  const onSubmit = (e) => {
    e.preventDefault();

    const titleErr = validateText(titleRef.current.value);
    const countryErr = validateText(countryRef.current.value);
    const caffeineErr = validateNumber(caffeineRef.current.value);
    const descriptionErr = validateTextarea(descriptionRef.current.value);
    const ingredientsErr = validateDropdown(selectedIngredients);

    if (
      titleErr ||
      countryErr ||
      caffeineErr ||
      descriptionErr ||
      ingredientsErr
    )
      return setErrors({
        title: titleErr,
        country: countryErr,
        caffeine: caffeineErr,
        description: descriptionErr,
        ingredients: ingredientsErr,
      });

    const coffee = {
      title: titleRef.current.value,
      country: countryRef.current.value,
      caffeine: caffeineRef.current.value,
      country: countryRef.current.value,
      description: descriptionRef.current.value,
      image: "https://example.com/images/irish-coffee.jpg",
      ingredients: selectedIngredients,
    };

    if (!coffeeId) {
      sendRequest("https://crudapi.co.uk/api/v1/coffees", "POST", [coffee]);
      // addCoffee(coffee); wont work properly since _uuid wont be available
    } else {
      coffee._uuid = coffeeId;
      sendRequest(
        `https://crudapi.co.uk/api/v1/coffees/${coffeeId}`,
        "PUT",
        coffee
      );
      editCoffee(coffee); // wont be the true coffee data since its missing alot of keys given by the backend
    }

    navigate("/coffee");
  };

  const onCoffeeDelete = (coffeeId) => {
    sendRequest(`https://crudapi.co.uk/api/v1/coffees/${coffeeId}`, "DELETE");
    deleteCoffee(coffeeId);
    navigate("/coffee");
  };

  return (
    <form className={styles["form"]} onSubmit={onSubmit}>
      <div>
        <div>
          <Input
            name="title"
            inputRef={titleRef}
            defaultValue={coffee && coffee.title}
            error={errors.title}
          />
          <Input
            name="country"
            inputRef={countryRef}
            defaultValue={coffee && coffee.country}
            error={errors.country}
          />
          <Input
            name="caffeine"
            type="number"
            inputRef={caffeineRef}
            defaultValue={coffee && coffee.caffeine}
            error={errors.caffeine}
          />
          <ImageInput imageRef={imageRef} />
        </div>

        <div>
          <DropdownInput
            name="ingredients"
            items={ingredients}
            selectedItems={selectedIngredients}
            onSelectItem={onSelectIngredient}
            error={errors.ingredients}
          />
          <TextareaInput
            name="description"
            error={errors.description}
            textareaRef={descriptionRef}
          />
        </div>
      </div>
      <Control itemId={coffeeId} onDelete={onCoffeeDelete} name="coffee" />
    </form>
  );
}

export default Form;
