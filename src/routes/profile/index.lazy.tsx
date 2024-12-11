import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/profile/index.view'

export const Route = createLazyFileRoute('/profile/')({
  component: $,
})

function $() {
  return <View />
}
