import { Button, Group, Modal } from "@mantine/core"
import { Plus, Search } from "lucide-react"
import Planet from "@asset/planet.asset"
import { useDisclosure } from "@mantine/hooks"
import FormClass from "@form/class.form"
import CardClass from "@ui/card/class.card"
import planets from "@lib/planets.lib"

export default function View({ planet_id }: { planet_id: number }) {
  const [opened, { open, close }] = useDisclosure(false)

  const { planet_name = '', planet_color = '', level_name = '' } = planets.find(planet => planet.planet_id === planet_id) ?? {}

  return (
    <div className="flex flex-col justify-start items-center w-full px-4 h-full">
      <Group justify="space-between" gap={2} className="w-full mb-4 pr-2">
        <div className="flex flex-row justify-start items-center gap-2">
          <Planet
            width={28}
            height={28}
            planet_color={planet_color}
          />
          <h1 className="text-left text-2xl font-extrabold capitalize">{planet_name} - {level_name}</h1>
        </div>

        <Group gap={8}>
          <Button
            variant="transparent"
            style={{ color: planet_color }}
            className="h-[2.8rem] px-2 rounded-full hover:bg-gray-200"
            onClick={open}
            >
            <Search size={28} strokeWidth={2.4} />
          </Button>

          <Button
            variant="light"
            style={{ backgroundColor: planet_color }}
            className="h-[2.8rem] rounded-full text-white font-extrabold"
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
        title={<p className="text-xl font-bold">Create New Class</p>}
      >
        <FormClass action="create" class_id={null} class_name="" planet_id={planet_id} close={close} />
      </Modal>

      <div className="flex flex-wrap justify-start w-full">
        {
          Array.from({ length: 3 }, (_, i) => (
            <div className="w-1/4 mb-8 pr-2" key={`box-class-${i}`}>
              <CardClass class_id={i + 1} class_name="Class" planet_id={planet_id} />
            </div>
          ))
        }
      </div>
    </div>
  )
}