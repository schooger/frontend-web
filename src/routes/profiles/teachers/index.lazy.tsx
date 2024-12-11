import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/profiles/teachers/index.view'

export const Route = createLazyFileRoute('/profiles/teachers/')({
  component: $,
})

function $() {
  return <View />
}
