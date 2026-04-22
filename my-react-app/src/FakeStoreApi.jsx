import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function FakeStoreApi() {
    const[product, setProduct]= useState([])
    useEffect(()=> {
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[])

  return (
    <div style={styles.container}>
        {product.map((item)=>(
            <div key={item.id} style={styles.card}>
                <img src={item.image} alt={item.title} style={styles.image}/>
                          <h3 style={styles.title}>{item.title}</h3>
          <p style={styles.price}>₹ {item.price}</p>
          <p style={styles.category}>{item.category}</p>
        </div>
      ))}

        
        
    </div>
  )
}
const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px",
    padding: "20px",
  },

  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
  },

  image: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },

  title: {
    fontSize: "14px",
  },

  price: {
    color: "green",
    fontWeight: "bold",
  },
};
