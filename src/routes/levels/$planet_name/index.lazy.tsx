import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/levels/$planet_name/index.view'
import planets from '@lib/planets.lib'

export const Route = createLazyFileRoute('/levels/$planet_name/')({
  component: $,
})

function $() {
  const { planet_name } = Route.useParams()

  if (planets.some((o) => o.planet_name === planet_name)) {
    const { planet_id } = planets.find((p) => p.planet_name === planet_name) ?? {}

    return (
      <View planet_id={planet_id as number} />
    )
  }

  return <h1>no planet found</h1>
}
