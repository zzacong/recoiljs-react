import { useRecoilValue } from 'recoil'
import { todoListState, filteredTodoListState } from '../recoil'
import TodoListStats from './TodoListStats'
import TodoListFilters from './TodoListFilters'
import TodoItemCreator from './TodoItemCreator'
import TodoItem from './TodoItem'
import { HStack, VStack } from '@chakra-ui/react'

export default function TodoList() {
  // const todoList = useRecoilValue(todoListState)
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <HStack spacing="4em">
      <TodoListStats />

      <VStack align="stretch">
        <TodoListFilters />
        <TodoItemCreator />
        {todoList.map(todoItem => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </VStack>
    </HStack>
  )
}
