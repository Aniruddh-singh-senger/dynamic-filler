// import React, { useState } from 'react';
// import { Product } from './Product';



// const ProductFile = ({up}) => {

//     const [items, setItems] = useState(Product);

//     const filter = (cs)=>{
//         const neew = Product.filter((ce)=>{
//             return ce.product_name===cs;
//         })
//         setItems(neew);
//     }
   
    
//     return (
//         <>
//         <button style={{background:'black'}} onClick={()=>filter('Tesla housing corporation')}>tesla</button>
//         <button style={{background:'black'}} onClick={()=>filter('Tesla housing corporation')}>Tesla housing corporation</button>
//         <button style={{background:'black'}} onClick={()=>filter('Amazon pvt ltd')}>Amazon pvt ltd</button>
//         <button style={{background:'black'}} onClick={()=>filter('Tesla housing corporation')}>tesla</button>
//         <button style={{background:'black'}} onClick={()=>filter('Tesla housing corporation')}>tesla</button>
//         <button style={{background:'black'}} onClick={()=>filter('Tesla housing corporation')}>tesla</button>
//              <div className="card-s">               

//                 {items.map((scard) => {

//                     let { product_name, brand_name, discription, price, date, image, address } = scard

//                     return <div style={{ background: 'grey', padding: '5px', display: 'grid', gridTemplateColumns: "1fr 1fr", gridTemplateRows: '1fr 1fr 1fr 1fr 1fr', gridGap: '10px', height: '80%' }} >
//                     <img src={image} style={{ width: '90%', gridRow: '1/3' }} alt="..." />
//                     <h5>{product_name}</h5>
//                     <p> {brand_name} </p>
//                     <p style={{ gridColumn: '2/3' }}>${price}</p>
//                     <p>{address.state} </p>
//                     <p>Date: {date}</p>
//                     <p style={{ gridColumn: '1/-1' }} >{discription}</p>
//                 </div>
//               })}
//               </div>
          
//         </>
//     )
// }

// export default ProductFile;
