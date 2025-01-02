import { createLazyFileRoute } from '@tanstack/react-router'
import ViewInfos from '@view/teachers/$teacher_id/index.view'

export const Route = createLazyFileRoute('/teachers/$teacher_id/')({
  component: $,
})

function $() {
  const { teacher_id } = Route.useParams()

  return <ViewInfos teacher_id={teacher_id as number} active_tab="infos" />
}