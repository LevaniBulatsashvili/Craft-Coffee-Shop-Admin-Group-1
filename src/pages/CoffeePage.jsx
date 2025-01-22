import { useContext, useEffect, useState } from "react";
import PageContainer from "../layouts/PageContainer";
import {  useCoffeeContext } from "../contexts/CoffeeContext";
import useFetch from "../hooks/useFetch";
  

const  CoffeePage = () => {
  const { coffees, setCoffees } = useCoffeeContext()// from contextApi
  //const [newCoffee, setNewCoffee]=useState('')// is empty when the component is first rendered,
   const {data, loading, error}=useFetch(
     "https://crudapi.co.uk/api/v1/coffees",
     'GET',
     []
   )
   console.log(data)



 useEffect (() => {
  console.log('Fetched data:', data);
if (data.length>0) {
  setCoffees(data)
}
 }, [data,setCoffees])

if (loading) {
  return <p>Loading...</p>
}

if (error){
  return <p>Try again</p>
}

  
const handleEdit = (id) => {
  // Redirect to /coffee/manage?id={id}
  window.location.href = `/coffee/manage?id=${id}`;
};
  return (
    <PageContainer>

      <div>
      <h1>Coffee List</h1>
      <table>
        <thead>
          <tr>
            <th>Tittle</th>
            <th>Image</th>
            <th>Country</th>
            <th>Caffeine</th>
            <th>Total Price</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
        {coffees.map((coffee)=>(
          <tr key={coffee.id}>
            <td>
              {coffee.title}
              </td>
            <td>
            <img src={ coffee.img} alt={coffee.title}  />
            </td>
            <td>{coffee.country}</td>
            <td>{coffee.caffeine} mg</td>
            <td>{coffee.totalPrice} GEL</td>
            <td>
              <button onClick={()=> handleEdit(coffee.id)}> Edit</button>
              </td>
            </tr>
        ))}
            </tbody>
      </table>
      </div>

     </PageContainer>
     
    )}

export default CoffeePage;
