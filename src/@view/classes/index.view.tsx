import { Button, Group, Modal, Text } from "@mantine/core"
import { Plus, Search } from "lucide-react"
import { useDisclosure } from "@mantine/hooks"
import FormClass from "@form/class.form"
import CardClass from "@ui/card/class.card"
import AppLoader from "@layout/app-loader.layout"
import { useQuery } from "@tanstack/react-query"
import { find_all } from "@api/classes/get.api"

export default function View() {
  const [opened, { open, close }] = useDisclosure(false)

  const { isPending, data } = useQuery({
    queryKey: ['api/classes/find_all'],
    queryFn: () => find_all(),
  })

  if (isPending) return <AppLoader />

  return (
    <div className="flex flex-col justify-start items-center w-full px-2 h-full">
      <div className="flex flex-col items-center w-[64rem] max-w-[90%] h-full">
        <Group justify="space-between" gap={2} className="w-full mb-8">
          <Text className="text-2xl font-bold capitalize">Classes</Text>

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
          title={<p className="text-xl font-bold">Create New Class</p>}
        >
          <FormClass action="create" class_id={null} close={close} />
        </Modal>

        <div className="flex flex-wrap justify-start w-full">
          {
            data?.map(({ class_id, class_name, planet_id }) => (
              <div className="w-1/3 px-4 mb-8" key={`box-class-${class_id}`}>
                <CardClass class_id={class_id} class_name={class_name} planet_id={planet_id} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}