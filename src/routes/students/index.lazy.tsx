import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/students/index.view'

export const Route = createLazyFileRoute('/students/')({
  component: $,
})

function $() {
  return <View />
}
