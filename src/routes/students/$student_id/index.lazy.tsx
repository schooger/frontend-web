import { createLazyFileRoute } from '@tanstack/react-router'
import ViewInfos from '@view/students/$student_id/index.view'

export const Route = createLazyFileRoute('/students/$student_id/')({
  component: $,
})

function $() {
  const { student_id } = Route.useParams()

  return <ViewInfos student_id={student_id as number} active_tab="infos" />
}