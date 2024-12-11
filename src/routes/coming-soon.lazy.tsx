import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/coming-soon.view'

export const Route = createLazyFileRoute('/coming-soon')({
  component: $,
})

function $() {
  return <View />
}
