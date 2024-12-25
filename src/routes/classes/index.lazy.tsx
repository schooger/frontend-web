import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/classes/index.view'

export const Route = createLazyFileRoute('/classes/')({
  component: $,
})

function $() {
  return <View />
}
