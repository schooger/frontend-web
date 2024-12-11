import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/organization/transports/index.view'

export const Route = createLazyFileRoute('/organization/transports/')({
  component: $,
})

function $() {
  return <View />
}
