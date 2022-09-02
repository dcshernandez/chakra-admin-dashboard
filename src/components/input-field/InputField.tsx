import { HTMLInputTypeAttribute, InputHTMLAttributes, useState } from 'react'
import { useField } from 'formik'

import {
  Button,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import { Eye, EyeOff } from 'react-feather'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  type: HTMLInputTypeAttribute
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    name, label, type, ...rest
  } = props
  const [field, meta] = useField({ name, ...rest })
  const [inputType, setInputType] = useState(type)

  const handleInputType = () => {
    setInputType((prev) => (
      prev === 'password' ? 'text' : 'password'
    ))
  }

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          bg={useColorModeValue('gray.50', 'gray.800')}
          type={inputType}
          {...field}
          variant="filled"
          _hover={{
            bg: useColorModeValue('gray.50', 'gray.800'),
          }}
        />
        {meta.touched && meta.error && (
          <Text mt={1} fontSize="xs" color="red.500">{meta.error}</Text>
        )}
        {
          type === 'password' && (
            <InputRightElement>
              <Button size="sm" bg="none" onClick={handleInputType}>
                {
                  inputType === 'password' ? <Eye /> : <EyeOff />
                }
              </Button>
            </InputRightElement>
          )
        }
      </InputGroup>
    </FormControl>
  )
}
export default InputField
