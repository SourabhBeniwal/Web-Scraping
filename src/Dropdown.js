import React from 'react'
import { Container } from 'react-bootstrap';
// import phones from "../phones.json";

function Dropdown() {
    
  return (
    <Container className='content'>
        <div className='row'>
            <div className='col-sm-12'>
                <h2 className='title'>Select Refurbished Smartphones </h2> 

                <div className='container'>
                    <div className='brand-div'>
                        <label className='mb-2'>Brands</label>
                        <select name="brand" className='form-control'  >
                            <option aria-disabled='true' >--Select Smartphone Brand-- </option>
                            <option>Apple</option>
                            <option>Xiaomi</option>
                            <option>Oneplus</option>
                            <option>Poco</option>
                        </select>
                    </div>
                    <div className='model-div'>
                        <label className='mb-2'>Models</label>
                        <select name="brand" className='form-control'>
                            <option>--Models--</option>
                            <option>Apple iPhone XR - Refurbished Good</option>
                            <option>Apple iPhone X - Refurbished Superb</option>
                            <option>Xiaomi Redmi Note 7 Pro - Refurbished Superb</option>
                            <option>OnePlus 6T - Refurbished Good</option>
                            <option>POCO X2 - Refurbished Good</option>
                        </select>
                    </div>
                    
                </div>
                <div className='form-group col-md-2 mt-4'>
                        <button className='button-div'>Apply</button>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Dropdown