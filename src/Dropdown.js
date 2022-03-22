import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';

function dropdown(props) {
    // useEffect(() => {
    //     const getData = () => {
    //         fetch('./phones.json'
    //             , {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Accept': 'application/json'
    //                 }
    //             }
    //         )
    //             .then(function (response) {
    //                 console.log(response)
    //                 return response.json();
    //             })
    //             .then(function (myJson) {
    //                 console.log(myJson);

    //             });
    //     }
    //     getData();
    // })
    return (
        <div className='content'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h1 className='header'>Select Refurbished Smartphones </h1>

                    <h2 className="title">==Selectors & Apply==</h2>
                    <div className='container'>
                        <div className='brand-div'>
                            <label className='mb-2'>Brands</label>
                            <select name="brand" id="model" className='form-control'  >
                                <option aria-disabled='true' >--Select Smartphone Brand-- </option>
                                <option>Apple</option>
                                <option>Xiaomi</option>
                                <option>Oneplus</option>
                                <option>Poco</option>
                            </select>
                        </div>
                        <div className='model-div'>
                            <label className='mb-2'>Models</label>
                            <select name="brand" id="model" className='form-control'>
                                <option>--Models--</option>
                                <option>Apple iPhone XR - Refurbished Good</option>
                                <option>Apple iPhone X - Refurbished Superb</option>
                                <option>Xiaomi Redmi Note 7 Pro - Refurbished Superb</option>
                                <option>OnePlus 6T - Refurbished Good</option>
                                <option>POCO X2 - Refurbished Good</option>
                            </select>
                        </div>
                        <div className='form-group col-md-2 mt-4'>
                            <button className='button-div'>Apply</button>
                        </div>
                    </div>
                </div>

                <h2 className='model-title'>==Models List==</h2>
                <div className='Model-container'>
                    <div className="site-name">
                        <h3>Cashify</h3>
                    </div>
                    <div className="details">
                        <ul>
                            <li>Smartphones</li>
                            <li>Price</li>
                            <li>Storage</li>
                            <li>Color</li>
                            <li>Condition</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default dropdown;