import React, { useState } from 'react';
import { Product } from './Product';

const Dropdown = ({up}) => {

    const neew = [...new Set(Product.map((ce) => ce.product_name))]
    const [category, setCategory] = useState();

    const nee = [...new Set(Product.map((ce) => ce.address.state))]
    const [item, setItem] = useState()

    const neer = [...new Set(Product.map((ce) => ce.address.city))]
    const [items, setItems] = useState()

   

    return (
        <>
            <select className="form-select" style={{ marginTop: '20px' }} value={category} onChange={(e)=>{setCategory(e.target.value)}} >
                <option style={{ background: 'black' }} selected>Product Data</option>
                {neew.map((ce) => <option style={{ background: 'black' }}  value={ce}>{ce}</option>)}</select>

            <select className="form-select" style={{ marginTop: '20px' }} value={item} onChange={(e)=>setItem(e.target.value) }  >
                <option style={{ background: 'black' }} selected>State</option>
                {nee.map((ce) => <option style={{ background: 'black' }} value={ce}>{ce}</option>)}</select>

            <select className="form-select" style={{ marginTop: '20px' }} value={items} onChange={(e)=>setItems(e.target.value) }  >
                <option style={{ background: 'black' }} selected>City</option>
                {neer.map((ce) => <option style={{ background: 'black' }} value={ce}>{ce}</option>)}</select>

                <h1>{category}</h1>
        </>
    )
}

export default Dropdown;
