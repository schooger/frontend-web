import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/levels/index.view'

export const Route = createLazyFileRoute('/levels/')({
  component: $,
})

function $() {
  return <View />
}
