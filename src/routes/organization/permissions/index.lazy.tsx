import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/organization/permissions/index.view'

export const Route = createLazyFileRoute('/organization/permissions/')({
  component: $,
})

function $() {
  return <View />
}
