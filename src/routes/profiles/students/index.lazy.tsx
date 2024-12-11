import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/profiles/students/index.view'

export const Route = createLazyFileRoute('/profiles/students/')({
  component: $,
})

function $() {
  return <View />
}
