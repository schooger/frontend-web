import { SimpleGrid } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import Planet from "@asset/planet.asset"
import planets from "@lib/planets.lib"

export default function View() {
  return (
    <div className="flex flex-col justify-start items-center w-full px-2 h-full">
      <div className="flex flex-col items-center w-[72rem] max-w-[90%] h-full">
        <h1 className="w-full mb-8 text-left text-3xl font-bold">Classes</h1>

        <SimpleGrid className="w-full" cols={6} spacing="xl">
          {
            planets.map(({ name, color, grade_name }, i) => (
              <Link to={`/organization/classes/${name}`} key={`planet-${i}`}>
                <div className="flex flex-col justify-start items-center gap-1 pl-2 my-4">
                  <Planet
                    width={120}
                    height={120}
                    planet_fill={color}
                  />
                  <span className="text-lg font-bold">{name}</span>
                  <span className="text-md font-medium">{grade_name}</span>
                </div>
              </Link>
            ))
          }
        </SimpleGrid>
      </div>
    </div>
  )
}
/*
schooger is an univers
each school is a star
each grade is a planet
each class is a race
each group is a troup
each user is a character

component PascalCase
function snake_case
state $ and $_
let, var, const, snake_case
*/