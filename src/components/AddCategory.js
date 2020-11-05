import React, { useState } from 'react';
import PropTypes from 'prop-types'

import {InputGroup, FormControl, Form} from 'react-bootstrap'
import {Search} from 'react-bootstrap-icons';


const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value);   
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();

        //trim() corta los espacios en blanco
        if(inputValue.trim().length > 2 ){
            setCategories(category => [inputValue, ...category ]);
            setInputValue('');
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text><Search/></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Gif"
                    aria-label="Buscar gif"
                    value={inputValue}
                    onChange={handleChange}    
                />
            </InputGroup>  
        </Form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired, // hago que el prop sea requerida si o si
}

export default AddCategory;