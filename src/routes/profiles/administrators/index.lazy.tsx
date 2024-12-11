import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/profiles/administrators/index.view'

export const Route = createLazyFileRoute('/profiles/administrators/')({
  component: $,
})

function $() {
  return <View />
}
