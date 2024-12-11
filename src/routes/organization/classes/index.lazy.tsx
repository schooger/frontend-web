import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/organization/classes/index.view'

export const Route = createLazyFileRoute('/organization/classes/')({
  component: $,
})

function $() {
  return <View />
}
