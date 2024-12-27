import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/levels/$planet_name/index.view'
import planets from '@lib/planets.lib'

export const Route = createLazyFileRoute('/levels/$planet_name/')({
  component: $,
})

function $() {
  const { planet_name } = Route.useParams()

  const planet_info = planets.find((p) => p.planet_name === planet_name)

  if (planets.some((o) => o.planet_name === planet_name))
    return (
      <View
        planet_id={planet_info?.planet_id as number}
        planet_name={planet_info?.planet_name as string}
        planet_color={planet_info?.planet_color as string}
        level_name={planet_info?.level_name as string}
      />
    )

  return <h1>no planet found</h1>
}
