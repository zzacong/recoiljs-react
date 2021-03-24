import { Center, ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import TodoList from './components/TodoList'

export default function App() {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <Center w="100vw" h="100vh">
          <TodoList />
        </Center>
      </RecoilRoot>
    </ChakraProvider>
  )
}
