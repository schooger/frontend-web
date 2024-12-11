import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/reports/presence/index.view'

export const Route = createLazyFileRoute('/reports/presence/')({
  component: $,
})

function $() {
  return <View />
}
