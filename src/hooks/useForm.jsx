import { useState } from 'react'

export const useForm = (initialState={}) => {
  

    const [values, setvalues] = useState(initialState)

    const reset = (newFormState = initialState) => {
      setvalues(newFormState)
    }

    const inputChange = ({ target }) => {
        setvalues({
          ...values,
          [target.name]: target.value, // computando, quiero q esta propiedad sea lo q venga en el objeto
        });
    };

    return [values, inputChange, reset]
    // return {values, inputChange}

}