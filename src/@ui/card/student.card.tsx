import { Box, Button, Menu, Modal, Paper, Skeleton, Text } from "@mantine/core"
import { EllipsisVertical } from "lucide-react"
import { useDisclosure } from "@mantine/hooks"
import FormStudent from "@form/student.form"
import planets from "@lib/planets.lib"
import { useState } from "react"

interface Props {
  student_id: number,
  student_first_name?: string,
  student_last_name?: string,
  student_email?: string,
  student_phone?: string,
  student_image?: string,
  planet_id?: number,
  class_name?: string,
}

export default function Card({ student_id, student_first_name, student_last_name, student_email, student_phone, student_image, planet_id, class_name }: Props) {
  const [$image_is_loaded, $_image_is_loaded] = useState(false)
  const [opened, { open, close }] = useDisclosure(false)

  const { planet_name = '', planet_color = '', level_name = '' } = planets.find(planet => planet.planet_id === planet_id) ?? {}

  return (
    <>
      <Paper radius="md" withBorder p="md" className="relative flex flex-col justify-center items-center w-full overflow-hidden">
        <div className="absolute top-0 right-0 mt-2">
          <CardDropdown />
        </div>

        <div className='w-[6rem] bg-transparent border-0 rounded-full'>
          <img
            className={`w-full aspect-square bg-white object-cover object-center rounded-full ${!$image_is_loaded && 'hidden'}`}
            src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/${student_image}`}
            alt="image"
            onLoad={() => $_image_is_loaded(true)}
          />
          <Skeleton
            circle
            mb="xl"
            classNames={{
              root: `w-full aspect-square ${$image_is_loaded ? 'hidden' : 'inline-block'} mb-[0_!important]`
            }}
          />
        </div>

        <Box className="w-full text-center">
          <Text className="mt-1 text-sm font-semibold lowercase" style={{ color: planet_color }}>{planet_name}</Text>

          <Text className="mt-2 text-xl font-bold" truncate="end">{student_first_name} {student_last_name}</Text>
          <Text className="mt-0 text-sm text-gray-500 font-normal capitalize" truncate="end">{class_name} | {level_name}</Text>

          <Text className="mt-4 text-sm text-gray-500 font-medium lower" truncate="end">{student_email}</Text>
          <Text className="mt-1 text-sm text-gray-500 font-medium lower" truncate="end">{student_phone}</Text>
        </Box>

        <Button
          variant="filled"
          fullWidth
          className="mt-4 font-bold"
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
        title={<p className="text-xl font-bold">Update Student</p>}
      >
        <FormStudent
          action="create"
          student_id={student_id}
          student_first_name={student_first_name}
          student_last_name={student_last_name}
          student_email={student_email}
          student_phone={student_phone}
          planet_id={planet_id}
          close={close}
        />
      </Modal>
    </>
  )
}

function CardDropdown() {
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
      </Menu.Dropdown>
    </Menu>
  )
}