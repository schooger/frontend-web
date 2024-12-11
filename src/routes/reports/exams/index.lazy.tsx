import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/reports/exams/index.view'

export const Route = createLazyFileRoute('/reports/exams/')({
  component: $,
})

function $() {
  return <View />
}
