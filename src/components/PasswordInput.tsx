/* eslint-disable react/no-children-prop */
import { InputGroup, InputLeftElement, Input, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Text from './shared/Text'

const PasswordInput = () => {
  const [passwordVisisble, setPasswordVisible] = useState<boolean>(false)
  return (
    <Stack spacing={2}>
      <label htmlFor="password">
        <Text text="Password" fontWeight="bold" />
      </label>
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
        />
      </InputGroup>
    </Stack>
  )
}

export default PasswordInput
