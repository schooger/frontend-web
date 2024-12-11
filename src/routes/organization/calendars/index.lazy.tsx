import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/organization/calendars/index.view'

export const Route = createLazyFileRoute('/organization/calendars/')({
  component: $,
})

function $() {
  return <View />
}
