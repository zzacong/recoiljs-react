import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { Flex, Button, Input } from '@chakra-ui/react'
import { todoListState } from '../recoil'
import { getId } from '../util'

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ])
    setInputValue('')
  }

  return (
    <Flex>
      <Input
        value={inputValue}
        mr={2}
        onChange={({ target }) => setInputValue(target.value)}
      />
      <Button onClick={addItem}>Add</Button>
    </Flex>
  )
}

export default TodoItemCreator
