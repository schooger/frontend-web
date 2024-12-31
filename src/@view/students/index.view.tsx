import { Button, Group, Modal, Pagination, Text } from "@mantine/core"
import { Plus, Search } from "lucide-react"
import { useDisclosure } from "@mantine/hooks"
import FormStudent from "@form/student.form"
import CardStudent from "@ui/card/student.card"
import AppLoader from "@layout/app-loader.layout"
import { useQuery } from "@tanstack/react-query"
import { find_all as find_all_students } from "@api/students/get.api"

export default function View() {
  const [opened, { open, close }] = useDisclosure(false)

  const { isPending, data } = useQuery({
    queryKey: ['api/students/find_all'],
    queryFn: () => find_all_students(),
  })

  if (isPending) return <AppLoader />

  return (
    <div className="flex flex-col justify-start items-center w-full px-4 h-full">
      <Group justify="space-between" gap={2} className="w-full mb-4 pr-2">
        <Text className="text-2xl font-extrabold capitalize">Students</Text>

        <Group gap={8}>
          <Button
            variant="transparent"
            color="blue"
            className="h-[2.8rem] px-2 rounded-full hover:bg-gray-200"
            onClick={open}
          >
            <Search size={28} strokeWidth={2.4} />
          </Button>

          <Button
            variant="light"
            color="blue"
            className="h-[2.8rem] rounded-full border-0 font-extrabold"
            onClick={open}
            leftSection={<Plus size={20} strokeWidth={2.8} />}
          >ADD</Button>
        </Group>
      </Group>

      <Modal
        centered
        closeOnClickOutside={false}
        opened={opened}
        onClose={close}
        title={<p className="text-xl font-bold">Add New Student</p>}
      >
        <FormStudent action="create" student_id={null} close={close} />
      </Modal>

      <div className="flex flex-wrap justify-start w-full">
        {
          data?.map(({ student_id, student_first_name, student_last_name, student_email, student_phone, student_image, planet_id, class_name }) => (
            <div className="w-1/4 mb-8 pr-2" key={`student-${student_id}`}>
              <CardStudent
                student_id={student_id}
                student_first_name={student_first_name}
                student_last_name={student_last_name}
                student_email={student_email}
                student_phone={student_phone}
                student_image={student_image}
                planet_id={planet_id}
                class_name={class_name}
              />
            </div>
          ))
        }
      </div>

      <div className="flex justify-center w-full">
        <Pagination total={10} size="md" radius="xl" withControls={false} />
      </div>
    </div>
  )
}