import { useContext, useEffect, useState } from "react";
import PageContainer from "../layouts/PageContainer";
import { useCoffeeContext } from "../contexts/CoffeeContext";

const  CoffeePage = () => {
  const { coffees, addCoffee, editCoffee, deleteCoffee } = useCoffeeContext();//to recive data from contextApi
  const [newCoffee, setNewCoffee]=useState('')// is empty when the component is first rendered
   const {data, loading, error,fetchData}=useFetch(
     "https://crudapi.co.uk/api/v1/coffees",
     'GET'
   )

//fetch data from crudapi

const fetchCoffee = async ()=> {
  try {
 setLoadin(true);
 const apiKey = import.meta.env.VITE_CRUDAPI_API_KEY;
 const response = await fetch()

  }
}




 const handleAddCofee =()=>{
  const coffee = {
    _uuid: Date.now().toString(), //  unique identifier
    title: newCoffee,

  };
  addCoffee(coffee);
  setNewCoffee('')
 };

 const handleDelteCoffee = (coffeeId)=>{
  deleteCoffee(coffeeId)// send coffeeId to coffeeContex and delete
 };

 const handleEditCoffee= (coffeeId,newTitle) =>{
   const updateCoffee={
    ...coffees.fint((coffee)=> coffeeId._uuid === coffeeId),
    tiitle:newTitle,
  }
   editCoffee (updateCoffee)
  };
  
  
  return (
    <PageContainer>

      <div>Coffee Page






        
      </div>
    </PageContainer>
  );
}

export default CoffeePage;
