import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/settings/index.view'

export const Route = createLazyFileRoute('/settings/')({
  component: $,
})

function $() {
  return <View />
}
