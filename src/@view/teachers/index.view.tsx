import { Button, Group, Modal, Text } from "@mantine/core"
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
      <div className="flex flex-col items-center w-[64rem] max-w-[100%] h-full">
        <Group justify="space-between" gap={2} className="w-full mb-8">
          <Text className="text-2xl font-bold capitalize">Teachers</Text>

          <Group gap={8}>
            <Button
              variant="transparent"
              color="#222"
              className="h-[2.8rem] px-2 rounded-full hover:bg-gray-200"
              onClick={open}
            >
              <Search size={28} strokeWidth={2.8} />
            </Button>

            <Button
              variant="filled"
              color="blue"
              className="h-[2.8rem] rounded-full border-0 font-extrabold"
              onClick={open}
              leftSection={<Plus size={20} strokeWidth={2.8} />}
            >CREATE</Button>
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

        <div className="flex flex-wrap justify-start w-full">
          {
            data?.map(({ teacher_id, teacher_name, teacher_email, teacher_phone, teacher_title, teacher_image }) => (
              <div className="w-1/3 mb-8 pr-2" key={`teacher-${teacher_id}`}>
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
      </div>
    </div>
  )
}