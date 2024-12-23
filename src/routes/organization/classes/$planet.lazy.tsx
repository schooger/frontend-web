import { createLazyFileRoute } from '@tanstack/react-router'
import View from '@view/organization/classes/planet.view'
import planets from "@lib/planets.lib"

export const Route = createLazyFileRoute('/organization/classes/$planet')({
  component: $
})

function $() {
  const { planet } = Route.useParams()

  const planet_info = planets.find(p => p.name === planet)

  if (planets.some(o => o.name === planet)) return <View grade_name={planet_info?.grade_name as string} planet_name={planet_info?.name as string} planet_color={planet_info?.color as string} />

  return <UndefinedPlanet />
}

function UndefinedPlanet() {
  return <div>Undefined Planet: This planet is not recognized.</div>
}
