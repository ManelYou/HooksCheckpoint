import React, {useState} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';


const Filter = (props)=>{
    return(
      
        <div>

        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value = {props.filterVal}
          onChange = {(event) => props.setFilterVal(event.target.value)}
        />
      </Form>
     
     
        </div>
    );
}

export default Filter;