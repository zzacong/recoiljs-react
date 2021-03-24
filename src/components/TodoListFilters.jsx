import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { todoListFilterState } from '../recoil'

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = ({ target: { value } }) => {
    setFilter(value)
  }

  return (
    <FormControl>
      <FormLabel>Filter:</FormLabel>
      <Select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </Select>
    </FormControl>
  )
}
