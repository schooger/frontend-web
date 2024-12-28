import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/teachers/index.view'

export const Route = createLazyFileRoute('/teachers/')({
  component: $,
})

function $() {
  return <View />
}
