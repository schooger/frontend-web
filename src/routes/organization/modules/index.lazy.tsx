import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/organization/modules/index.view'

export const Route = createLazyFileRoute('/organization/modules/')({
  component: $,
})

function $() {
  return <View />
}
