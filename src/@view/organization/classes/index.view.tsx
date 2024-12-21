import { Avatar, Button, Group, Paper, Text } from "@mantine/core"
import { Shapes } from "lucide-react";

export default function View() {
  console.log('classes.view')
  const levels = [
    { name: 'Grade 1', },
    { name: 'Grade 2', },
    { name: 'Grade 3', },
    { name: 'Grade 4', },
    { name: 'Grade 5', },
    { name: 'Grade 6', },
  ]

  return (
    <div className="flex flex-col justify-start items-start w-full px-2">
      <div className="flex flex-col justify-start items-start w-[48rem] max-w-[90%]">
        <h1 className="text-3xl font-bold my-2 text-left">Classes</h1>
        {
          levels.map((item) => (
            <div className="my-8">
              <h1 className="pl-4 text-xl font-bold my-2">{item.name}:</h1>
              <div className="flex flex-row justify-start items-center gap-4">
                <$Class name="Class A" />
                <$EmptyClass />
              </div>
            </div>
          ))
        }
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