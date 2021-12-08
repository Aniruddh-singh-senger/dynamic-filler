import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { Product } from './Product';

const UI = () => {

    const [items, setItems] = useState(Product);
    

    const filter = (cs) => {
        const neew = Product.filter((ce) => {
            return ce.product_name === cs;
        })
        setItems(neew);
    }

    function parent(sent){
        setItems(sent)
    }

    

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gridGap: "20px", margin: '10px', padding: '10px' }}>
                <div style={{ background: 'black', height: '40%', borderRadius: '20px', padding: "20px" }}>
                    <input className="form-control me-2" type="search" placeholder="Filters" style={{ background: 'black', color: 'white' }} />
                    <Dropdown parent={parent} />
                </div>
                <div >
                    <h1>Aniruddh</h1>
                    <h5 style={{ color: 'grey', margin: '10px 0 ' }}>Products</h5>
                    <p>Product Name</p>
                    <hr style={{ background: 'white' }} />
                    <button style={{ background: 'black' }} onClick={() => filter('Tesla housing corporation')}>Tesla housing corporation</button>
                    <button style={{ background: 'black' }} onClick={() => filter('Amazon pvt ltd')}>Amazon pvt ltd</button>
                    <div className="card-s">

                        {items.map((scard) => {

                            let { product_name, brand_name, discription, price, date, image, address } = scard

                            return <div style={{ background: 'grey', padding: '5px', display: 'grid', gridTemplateColumns: "1fr 1fr", gridTemplateRows: '1fr 1fr 1fr 1fr 1fr', gridGap: '10px', height: '80%' }} >
                                <img src={image} style={{ width: '90%', gridRow: '1/3' }} alt="..." />
                                <h5>{product_name}</h5>
                                <p> {brand_name} </p>
                                <p style={{ gridColumn: '2/3' }}>${price}</p>
                                <p>{address.state} </p>
                                <p>Date: {date}</p>
                                <p style={{ gridColumn: '1/-1' }} >{discription}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UI
