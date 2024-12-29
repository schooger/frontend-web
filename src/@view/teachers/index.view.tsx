import { Button, Group, Modal, Pagination, Text } from "@mantine/core"
import { Plus, Search } from "lucide-react"
import { useDisclosure } from "@mantine/hooks"
import FormTeacher from "@form/teacher.form"
import CardTeacher from "@ui/card/teacher.card"
import AppLoader from "@layout/app-loader.layout"
import { useQuery } from "@tanstack/react-query"
import { find_all as find_all_teachers } from "@api/teachers/get.api"

export default function View() {
  const [opened, { open, close }] = useDisclosure(false)

  const { isPending, data } = useQuery({
    queryKey: ['api/teachers/find_all'],
    queryFn: () => find_all_teachers(),
  })

  if (isPending) return <AppLoader />

  return (
    <div className="flex flex-col justify-start items-center w-full px-2 h-full">
      <div className="flex flex-col items-center w-full h-full">
        <Group justify="space-between" gap={2} className="w-full mb-4 pr-2">
          <Text className="text-2xl font-extrabold capitalize">Teachers</Text>

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
              className="h-[2.8rem] rounded-full font-extrabold"
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
          title={<p className="text-xl font-bold">Add New Teacher</p>}
        >
          <FormTeacher action="create" teacher_id={null} close={close} />
        </Modal>

        <div className="hidden flex justify-end w-full mb-4 pr-2">
          <Pagination total={10} size="md" radius="xl" withControls={false} />
        </div>

        <div className="flex flex-wrap justify-start w-full">
          {
            data?.map(({ teacher_id, teacher_name, teacher_email, teacher_phone, teacher_title, teacher_image }) => (
              <div className="w-1/4 mb-8 pr-2" key={`teacher-${teacher_id}`}>
                <CardTeacher
                  teacher_id={teacher_id}
                  teacher_name={teacher_name}
                  teacher_email={teacher_email}
                  teacher_phone={teacher_phone}
                  teacher_title={teacher_title}
                  teacher_image={teacher_image}
                />
              </div>
            ))
          }
        </div>

        <div className="flex justify-center w-full">
          <Pagination total={10} size="md" radius="xl" withControls={false} />
        </div>
      </div>
    </div>
  )
}