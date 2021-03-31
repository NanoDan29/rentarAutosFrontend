import { useState } from "react"


const useForm = (init = {}) => {
    const [ values, setValues ] = useState( init );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const reset = () => {
        setValues(init)
    }

    return [
        values,
        handleInputChange,
        reset
    ]
}


export default useForm;