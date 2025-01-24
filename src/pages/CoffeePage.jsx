import { useContext, useEffect, useState } from "react";
import PageContainer from "../layouts/PageContainer";
import {  useCoffeeContext } from "../contexts/CoffeeContext";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import styles from '../style/CoffeePage.module.css';

  

const  CoffeePage = () => {
  const { coffees, setCoffees } = useCoffeeContext()// from contextApi
   const {data, loading, error}=useFetch(
     "https://crudapi.co.uk/api/v1/coffees",
     'GET',
     []
   )
   console.log(data)

   const navigate= useNavigate()

 useEffect (() => {
  
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
  navigate(`/coffee/manage?id=${id}`);
};

const handleAddButton = () => {
  navigate(`/coffee/manage`);
};

const handleGoToIngredients = () => {
  navigate("/ingredients");
};

  return (
    <PageContainer >
     <div className={styles.desktop}>
     <div className={styles.coffeeContainer}>
      <h1>Coffee List</h1>
      <button onClick={handleAddButton}  className={styles.addCoffeeButton}>Add Coffee</button>
    </div>
      <button onClick={handleGoToIngredients} > Ingredients</button>
      <div className={styles.container}>
      <table className={styles.table}>
  
      <thead >
        <tr>
          <th>Title</th>
          <th>Image</th>
          <th>Country</th>
          <th>Caffeine</th>
          <th>Total Price</th>
          <th>Edit</th>
        </tr>
      </thead>
      
      <tbody>
        {coffees.map((coffee) => (
          <tr key={coffee._uuid}>
            <td >{coffee.title}</td>
            <td >  <img className={styles.image} src={coffee.img} alt={coffee.title} />
             </td>
            <td >{coffee.country}</td>
            <td >{coffee.caffeine} mg</td>
            <td >{coffee.totalPrice} GEL</td>
            <td >
             <button onClick={() => handleEdit(coffee.id)}>
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
      </div>
      
      

     </PageContainer>
     
    )}

export default CoffeePage;
