/* eslint-disable react/no-children-prop */
import {
  InputGroup,
  InputLeftElement,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

interface PasswordInputprops {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isInvalid?: boolean
  errorMsg?: string
}
const PasswordInput = (props: PasswordInputprops) => {
  const { name, value, onChange, isInvalid, errorMsg } = props
  const [passwordVisisble, setPasswordVisible] = useState<boolean>(false)
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel htmlFor={name}>Password</FormLabel>
      <InputGroup>
        <InputLeftElement
          onClick={() => setPasswordVisible(!passwordVisisble)}
          cursor="pointer"
          children={
            passwordVisisble ? (
              <AiOutlineEyeInvisible size={25} />
            ) : (
              <AiOutlineEye size={25} />
            )
          }
        />
        <Input
          type={passwordVisisble ? 'text' : 'password'}
          placeholder="********"
          name={name}
          value={value}
          onChange={onChange}
        />
      </InputGroup>
      {isInvalid && errorMsg && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
    </FormControl>
  )
}

export default PasswordInput
