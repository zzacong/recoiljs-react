import { CheckCircleIcon, QuestionIcon } from '@chakra-ui/icons'
import { List, ListIcon, ListItem } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { todoListStatsState } from '../recoil'

export default function TodoListStats() {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState)

  const formattedPercentCompleted = Math.round(percentCompleted)

  return (
    <List spacing={3}>
      <ListItem>Total items: {totalNum}</ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        Items completed: {totalCompletedNum}
      </ListItem>
      <ListItem>
        <ListIcon as={QuestionIcon} color="red.500" />
        Items not completed: {totalUncompletedNum}
      </ListItem>
      <ListItem>Percent completed: {formattedPercentCompleted}</ListItem>
    </List>
  )
}
