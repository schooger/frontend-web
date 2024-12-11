import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/profiles/parents/index.view'

export const Route = createLazyFileRoute('/profiles/parents/')({
  component: $,
})

function $() {
  return <View />
}
