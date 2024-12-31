import { Group, Text } from "@mantine/core"
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
      <Group justify="space-between" gap={2} className="w-full h-[2.8rem] mb-8">
        <Text className="text-2xl font-extrabold capitalize">Levels</Text>
      </Group>

      <div className="flex flex-wrap justify-start w-full">
        {
          primary.map(({ planet_name, planet_color, level_name }, i) => (
            <div className="w-1/6 pr-2 mb-8" key={`planet-${i}`}>
              <Link to={`/levels/${planet_name}`}>
                <div className="flex flex-col justify-start items-center pr-2 my-4">
                  <Planet
                    width={100}
                    height={100}
                    planet_color={planet_color}
                  />
                  <span className="text-lg font-bold">{planet_name}</span>
                  <span className="text-md font-medium">{level_name}</span>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}