import { createLazyFileRoute } from '@tanstack/react-router'
import ViewInfos from '@view/classes/$class_id/index.view'

export const Route = createLazyFileRoute('/classes/$class_id/')({
  component: $,
})

function $() {
  const { class_id } = Route.useParams()

  return <ViewInfos class_id={class_id as number} active_tab="infos" />
}