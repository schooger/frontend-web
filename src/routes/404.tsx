import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/404')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Helloooooo "/404"!</div>
}
