import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/reports/degrees/index.view'

export const Route = createLazyFileRoute('/reports/degrees/')({
  component: $,
})

function $() {
  return <View />
}
