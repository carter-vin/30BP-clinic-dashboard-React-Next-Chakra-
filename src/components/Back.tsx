import { Flex, Stack } from '@chakra-ui/react'
import { MdArrowBackIosNew } from 'react-icons/md'
import Text from 'components/shared/Text'
import { useRouter } from 'next/router'

interface BackProps {
  backTitle: string
  redirect?: string
}
const Back = (props: BackProps) => {
  const { backTitle, redirect } = props
  const router = useRouter()
  return (
    <Flex justifyContent="flex-start">
      <Stack
        onClick={() => (redirect ? router.push(redirect) : router.back())}
        direction="row"
        alignItems="center"
        spacing={2}
        cursor="pointer"
      >
        <MdArrowBackIosNew size={25} />
        <Text text={backTitle} textTransform="capitalize" fontWeight="bold" />
      </Stack>
    </Flex>
  )
}

export default Back
