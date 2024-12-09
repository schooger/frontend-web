import { createFileRoute } from '@tanstack/react-router'
import ViewHome from '@view/home.view'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <ViewHome />
  )
}