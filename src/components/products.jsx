// const [products, setProducts] = useState([])

//   let fetchUrl = 'https://elitegloves.herokuapp.com/products'

//   const showProducts = async (url) => {
//     try {
//       const res = await fetch(url)
//       const data = await res.json()
//       setProducts(data)
//     } catch (err) {
//       console.log(err)
//     }

//   }

//   useEffect(() => {
//     const showProducts = async () => {
//       try {
//         const res = await fetch(fetchUrl)
//         const data = await res.json()
//         setProducts(data)
//       } catch (err) {
//         console.log(err)
//       }

//     }
//     showProducts();
//   }, [])














// import React, {useState,useEffect} from 'react'
// import Products from './Products'
// import axios from 'axios'
// import { useForm } from 'react-hook-form';
// export default function Products() {
  
//   const { register, handleSubmit} = useForm();
//   const [products,setProducts] = useState([]);
//   // const [inputValue,setInputValue]= useState("");

//   const onSubmit = formData => {
//       console.log(formData);
//     axios.post("ecommv2.c9cmbzningap.us-east-1.rds.amazonaws.com",formData)
//       .then(response=>{
//         console.log(response.data);
//         setProducts(response.data);
//       })
//   };
// //   function getRequest(){
// //     axios.get("https://onepieceecommercebackend.herokuapp.com/shoplow",{crossdomain: true})
// //       .then(response=>{
// //         setProducts(response.data);
// //       })
// //   };
//   useEffect(() =>{
//     const fetchData = async() =>{
//       const result = getRequest();
//       // setFruitData(result.data);
//       // console.log(result);
//     };
//     fetchData();

//     useEffect(() => {
//         Axios.get('https://smartecombackend.herokuapp.com/getProducts').then(
//             (response) => {
//                 showProducts(response.data);
//             }
//         );
//     }, []);
//   },[]);
//   return (  
//     <section>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <select {...register("sortOrder")}>
//           <option value="Featured">Default</option>
//           <option value="ASC">Lowest to Highest</option>
//           <option value="DESC">Highest to Lowest</option>
//         </select>
//         <input type="submit"/>
//       </form>
//       <article className="art1 art">
//       {
//         products.map((Products) =>
//           {
//             return(
//               <Product data={Products}/>
//             )
//           }
//         )
        
//       }
//       </article>
//     </section>
//   )
// }