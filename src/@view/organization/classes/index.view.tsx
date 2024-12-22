import { Avatar, Button, Group, Paper, SimpleGrid, Text } from "@mantine/core"
import { Shapes } from "lucide-react";
import Planet from "@asset/planet.asset";

export default function View() {
  console.log('classes.view')
  const grades = [
    { name: 'Grade 1', planet_name: 'hydro', planet_fill: '#fda4af' },
    { name: 'Grade 2', planet_name: 'hilio', planet_fill: '#0ea5e9' },
    { name: 'Grade 3', planet_name: 'argo', planet_fill: '#00FA9A' },
    { name: 'Grade 4', planet_name: 'kryptal', planet_fill: '#FF00FF' },
    { name: 'Grade 5', planet_name: 'netras', planet_fill: '#7e22ce' },
    { name: 'Grade 6', planet_name: 'oxy', planet_fill: '#1d4ed8' },
    { name: 'Grade 7', planet_name: 'iro', planet_fill: '#f97316' },
    { name: 'Grade 8', planet_name: 'bismo', planet_fill: '#8B4513' },
    { name: 'Grade 9', planet_name: 'chromo', planet_fill: '#047857' },
    { name: 'Grade 10', planet_name: 'coppo', planet_fill: '#dc2626' },
    { name: 'Grade 11', planet_name: 'silvo', planet_fill: '#cbd5e1' },
    { name: 'Grade 12', planet_name: 'goldo', planet_fill: '#FFD700' },
  ]

  return (
    <div className="flex flex-col justify-start items-center w-full px-2 h-full">
      <div className="flex flex-col items-center w-[48rem] max-w-[90%] h-full">
        <h1 className="w-full mb-8 text-left text-3xl font-bold">Grades</h1>

        <SimpleGrid className="w-full" cols={6} spacing="xl">
          {
            grades.map(({ name, planet_name, planet_fill }) => (
              <div className="flex flex-col justify-start items-center gap-2 pl-2 my-4">
                <Planet
                  width={80}
                  height={80}
                  planet_fill={planet_fill}
                />
                <span className="text-lg font-bold">{planet_name}</span>
                <span className="text-md font-medium">{name}</span>
              </div>
            ))
          }
        </SimpleGrid>
      </div>
    </div>
  )
}

function $Class({ name }: { name: string }) {
  const stats = [
    { value: '8', label: 'Teachers' },
    { value: '24', label: 'Students' },
  ];

  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="md" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Paper radius="md" withBorder p="md" className="flex flex-col justify-center items-center w-[14rem] h-[18rem] overflow-hidden">
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        size={100}
        radius={100}
      />
      <Text className="text-xl font-semibold mt-4">{name}</Text>

      <Group mt="md" justify="center" gap={30}>
        {items}
      </Group>

      <Button variant="light" fullWidth className="mt-4 font-bold">UPDATE</Button>
    </Paper>
  )
}

function $EmptyClass() {
  return (
    <Paper radius="md" p="md" className="flex flex-col justify-center items-center gap-4 w-[14rem] h-[18rem] bg-transparent overflow-hidden">
      <Shapes size={120} />
      <Text className="text-xl font-bold mt-4">Create New Class</Text>

      <Button variant="light" fullWidth className="mt-5 font-bold">CREATE</Button>
    </Paper>
  )
}

/*
schooger is an univers
each school is a star
each grade is a planet
each class is a race
each group is a troup
each user is a character
*/