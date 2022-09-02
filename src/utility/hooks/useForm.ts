import { FormEvent, useState } from 'react'

const useForm = (callback: Function, state: React.ComponentState) => {
  const [values, setValues] = useState(state)

  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target as any

    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    callback(values)
  }

  const resetValues = () => {
    setValues(state)
  }

  return {
    handleChange,
    handleSubmit,
    resetValues,
    values,
  }
}

export default useForm
