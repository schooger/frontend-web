import { SimpleGrid } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import Planet from "@asset/planet.asset"
import planets from "@lib/planets.lib"

export default function View() {
  const primary = planets.filter(({ level_name }) => {
    const grade = parseInt(level_name.split(' ')[1], 10);
    return grade >= 1 && grade <= 6;
  });

  return (
    <div className="flex flex-col justify-start items-center w-full px-2 h-full">
      <div className="flex flex-col items-center w-[72rem] max-w-[90%] h-full">
        <h1 className="w-full mt-0 text-left text-2xl font-bold">Levels</h1>

        <SimpleGrid className="w-full" cols={6} spacing="xl">
          {
            primary.map(({ planet_name, planet_color, level_name }, i) => (
              <Link to={`/levels/${planet_name}`} key={`planet-${i}`}>
                <div className="flex flex-col justify-start items-center gap-1 pl-2 my-4">
                  <Planet
                    width={100}
                    height={100}
                    planet_color={planet_color}
                  />
                  <span className="text-lg font-bold">{planet_name}</span>
                  <span className="text-md font-medium">{level_name}</span>
                </div>
              </Link>
            ))
          }
        </SimpleGrid>
      </div>
    </div>
  )
}