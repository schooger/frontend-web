import { Box, Button, Group, Menu, Modal, Paper, Text } from "@mantine/core"
import { EllipsisVertical } from "lucide-react"
import { Link } from "@tanstack/react-router"
import Planet from "@asset/planet.asset"
import { useDisclosure } from "@mantine/hooks"
import FormClass from "@form/class.form"
import planets from "@lib/planets.lib"

interface Props {
  class_id: number,
  class_name: string,
  planet_id: number,
}

export default function Card({ class_id, class_name, planet_id }: Props) {
  const [opened, { open, close }] = useDisclosure(false)

  const { planet_name = '', planet_color = '', level_name = '' } = planets.find(planet => planet.planet_id === planet_id) ?? {}

  return (
    <>
      <Paper radius="md" withBorder p="md" className="relative flex flex-col justify-center items-center w-full overflow-hidden">
        <div className="absolute top-0 right-0 mt-2">
          <CardDropdown class_id={class_id} />
        </div>

        <Planet
          width={100}
          height={100}
          planet_color={planet_color}
        />

        <Text className="mt-1 text-sm font-semibold lowercase" style={{ color: planet_color }}>{planet_name} | {level_name}</Text>

        <Box className="w-full text-center">
          <Text className="mt-4 text-xl font-semibold" truncate="end">{class_name}</Text>
        </Box>

        <Group mt="md" justify="center" gap={30}>
          <div>
            <Text ta="center" fz="md" fw={500}>8</Text>
            <Text ta="center" fz="sm" c="dimmed" lh={1}>Teachers</Text>
          </div>

          <div>
            <Text ta="center" fz="md" fw={500}>24</Text>
            <Text ta="center" fz="sm" c="dimmed" lh={1}>Students</Text>
          </div>
        </Group>

        <Button
          variant="filled"
          fullWidth
          className="mt-4 text-white font-bold"
          style={{
            backgroundColor: planet_color,
          }}
          onClick={open}
        >UPDATE</Button>
      </Paper>

      <Modal
        centered
        closeOnClickOutside={false}
        opened={opened}
        onClose={close}
        title={<p className="text-xl font-bold">Update Class</p>}
      >
        <FormClass action="create" class_id={class_id} class_name={class_name} planet_id={planet_id} close={close} />
      </Modal>
    </>
  )
}

function CardDropdown({ class_id }: { class_id: number }) {
  return (
    <Menu shadow="md" width={155} position="left-start">
      <Menu.Target>
        <button className='bg-transparent border-0 rounded-full'>
          <EllipsisVertical />
        </button>
      </Menu.Target>

      <Menu.Dropdown className="font-semibold">
        <a role="button" className="text-[#444]" aria-label="update">
          <Menu.Item>
            update
          </Menu.Item>
        </a>
        <a role="button" className="text-red-500" aria-label="delete">
          <Menu.Item>
            delete
          </Menu.Item>
        </a>
        <Link to={`/classes/${class_id}/teachers`} className="text-[#444]" aria-label="view teachers">
          <Menu.Item>
            view teachers
          </Menu.Item>
        </Link>
        <Link to={`/classes/${class_id}/students`} className="text-[#444]" aria-label="view students">
          <Menu.Item>
            view students
          </Menu.Item>
        </Link>
      </Menu.Dropdown>
    </Menu>
  )
}