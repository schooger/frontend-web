import { createFileRoute } from '@tanstack/react-router'
import ViewComingSoon from '@view/coming-soon.view'

export const Route = createFileRoute('/coming-soon')({
  component: Index,
})

function Index() {
  return (
    <ViewComingSoon />
  )
}