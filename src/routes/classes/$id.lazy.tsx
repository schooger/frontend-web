import { createLazyFileRoute } from '@tanstack/react-router'
import ViewPlanet from '@view/classes/planet.view'
import ViewInfo from '@view/classes/info.view'
import planets from '@lib/planets.lib'

export const Route = createLazyFileRoute('/classes/$id')({
  component: $,
})

function $() {
  const { id } = Route.useParams()

  const planet_info = planets.find((p) => p.planet_name === id)

  if (planets.some((o) => o.planet_name === id))
    return (
      <ViewPlanet
        planet_id={planet_info?.planet_id as number}
        planet_name={planet_info?.planet_name as string}
        planet_color={planet_info?.planet_color as string}
        grade_name={planet_info?.grade_name as string}
      />
    )

  return <ViewInfo class_id={id as number} />
}
