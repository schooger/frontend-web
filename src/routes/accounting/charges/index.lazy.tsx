import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/accounting/charges/index.view'

export const Route = createLazyFileRoute('/accounting/charges/')({
  component: $,
})

function $() {
  return <View />
}
