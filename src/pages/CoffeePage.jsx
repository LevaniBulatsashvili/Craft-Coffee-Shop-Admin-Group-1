import { useContext, useEffect, useState } from "react";
import PageContainer from "../layouts/PageContainer";
import { useCoffeeContext } from "../contexts/CoffeeContext";
import useFetch from "../hooks/useFetch";

const  CoffeePage = () => {
  const { coffees, addCoffee, editCoffee, deleteCoffee } = useCoffeeContext();//to recive data from contextApi
  const [newCoffee, setNewCoffee]=useState('')// is empty when the component is first rendered
   const {data, loading, error,fetchData}=useFetch(
     "https://crudapi.co.uk/api/v1/coffees",
     'GET',
     [],
   )





 useEffect (() => {
if (data&&data.length) {
  addCoffee(data)
}
}, [data,addCoffee])



 const handleAddCofee =()=>{
  if (!newCoffee) return ;//if input isempty,doesnot addcoffee
  
  const coffee = {
    _uuid: Date.now() ,//  unique identifier
     title: newCoffee,

  };
  addCoffee(coffee);
  setNewCoffee('')
 };

 const handleDelteCoffee = (coffeeId)=>{
  deleteCoffee(coffeeId)// send coffeeId to coffeeContex and delete
 };

 const handleEditCoffee= (coffeeId) =>{
   navigator(`coffee/manage?id=${coffeeId}`)
  };
  //error da damateba
  
  return (
    <PageContainer>

      <div>
      <h1>Coffee Page</h1>
      <input
        type="text"
        value={newCoffee}
        onChange={(e) => setNewCoffee(e.target.value)}

      />
      <button onClick={handleAddCoffee}>Add Coffee</button>
      <button onClick={() => {handleEditCoffee(coffee._uuid, "Updated Coffee Title")}}></button>
      <button onClick={() => handleDeleteCoffee(coffee._uuid)}>Delete</button>
      </div>
    </PageContainer>
  );
}

export default CoffeePage;
