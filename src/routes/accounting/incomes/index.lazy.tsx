import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/accounting/incomes/index.view'

export const Route = createLazyFileRoute('/accounting/incomes/')({
  component: $,
})

function $() {
  return <View />
}
