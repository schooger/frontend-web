import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/home.view'

export const Route = createLazyFileRoute('/')({
  component: $,
})

function $() {
  return <View />
}
