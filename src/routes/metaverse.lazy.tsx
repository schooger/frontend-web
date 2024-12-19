import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/metaverse.view'

export const Route = createLazyFileRoute('/metaverse')({
  component: $,
})

function $() {
  return <View />
}
