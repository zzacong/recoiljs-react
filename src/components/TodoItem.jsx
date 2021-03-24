import { useRecoilState } from 'recoil'
import { HStack, IconButton, Checkbox, Input } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { todoListState } from '../recoil'
import { replaceItemAtIndex, removeItemAtIndex } from '../util'

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex(listItem => listItem === item)

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    })
    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    })
    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)
    setTodoList(newList)
  }

  return (
    <HStack p={4} shadow="md" borderWidth="1px" borderRadius="md">
      <Input value={item.text} onChange={editItemText} />
      <Checkbox isChecked={item.isComplete} onChange={toggleItemCompletion} />
      <IconButton
        aria-label="Delete item"
        icon={<DeleteIcon />}
        onClick={deleteItem}
      />
    </HStack>
  )
}

export default TodoItem
