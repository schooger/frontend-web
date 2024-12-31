import { Box, Button, Group, Menu, Modal, Paper, Skeleton, Text } from "@mantine/core"
import { EllipsisVertical } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { useDisclosure } from "@mantine/hooks"
import FormTeacher from "@form/teacher.form"
import { useState } from "react"

interface Props {
  teacher_id: number,
  teacher_first_name: string,
  teacher_last_name: string,
  teacher_email: string,
  teacher_phone: string,
  teacher_title: string,
  teacher_image: string,
}

export default function Card({ teacher_id, teacher_first_name, teacher_last_name, teacher_email, teacher_phone, teacher_title, teacher_image }: Props) {
  const [imageIsLoaded, _imageIsLoaded] = useState(false)
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Paper radius="md" withBorder p="md" className="relative flex flex-col justify-center items-center w-full overflow-hidden">
        <div className="absolute top-0 right-0 mt-2">
          <CardDropdown teacher_id={teacher_id} />
        </div>

        <div className='w-[6rem] bg-transparent border-0 rounded-full'>
          <img
            className={`w-full aspect-square bg-white object-cover object-center rounded-full ${!imageIsLoaded && 'hidden'}`}
            src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/${teacher_image}`}
            alt="image"
            onLoad={() => _imageIsLoaded(true)}
          />
          <Skeleton
            circle
            mb="xl"
            classNames={{
              root: `w-full aspect-square ${imageIsLoaded ? 'hidden' : 'inline-block'} mb-[0_!important]`
            }}
          />
        </div>

        <Box className="w-full text-center">
          <Text className="mt-1 text-blue-500 text-sm font-semibold lowercase">{teacher_title}</Text>

          <Text className="mt-2 text-xl font-bold" truncate="end">{teacher_first_name} {teacher_last_name}</Text>

          <Text className="mt-4 text-sm text-gray-500 font-medium lower" truncate="end">{teacher_email}</Text>
          <Text className="mt-1 text-sm text-gray-500 font-medium lower" truncate="end">{teacher_phone}</Text>
        </Box>

        <Group mt="md" justify="center" gap={30}>
          <div>
            <Text ta="center" fz="md" fw={500}>6</Text>
            <Text ta="center" fz="sm" c="dimmed" lh={1}>Planets</Text>
          </div>

          <div>
            <Text ta="center" fz="md" fw={500}>8</Text>
            <Text ta="center" fz="sm" c="dimmed" lh={1}>Classes</Text>
          </div>

          <div>
            <Text ta="center" fz="md" fw={500}>24</Text>
            <Text ta="center" fz="sm" c="dimmed" lh={1}>Students</Text>
          </div>
        </Group>

        <Button
          variant="filled"
          fullWidth
          className="mt-4 font-bold"
          onClick={open}
        >UPDATE</Button>
      </Paper>

      <Modal
        centered
        closeOnClickOutside={false}
        opened={opened}
        onClose={close}
        title={<p className="text-xl font-bold">Update Teacher</p>}
      >
        <FormTeacher
          action="create"
          teacher_id={teacher_id}
          teacher_first_name={teacher_first_name}
          teacher_last_name={teacher_last_name}
          teacher_email={teacher_email}
          teacher_phone={teacher_phone}
          teacher_title={teacher_title}
          teacher_image={teacher_image}
          close={close}
        />
      </Modal>
    </>
  )
}

function CardDropdown({ teacher_id }: { teacher_id: number }) {
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
        <Link to={`/classes/${teacher_id}/teachers`} className="text-[#444]" aria-label="view teachers">
          <Menu.Item>
            view teachers
          </Menu.Item>
        </Link>
        <Link to={`/classes/${teacher_id}/students`} className="text-[#444]" aria-label="view students">
          <Menu.Item>
            view students
          </Menu.Item>
        </Link>
      </Menu.Dropdown>
    </Menu>
  )
}