import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/reports/homework/index.view'

export const Route = createLazyFileRoute('/reports/homework/')({
  component: $,
})

function $() {
  return <View />
}
