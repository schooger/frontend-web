import { Button, Modal } from "@mantine/core"
import { Plus } from "lucide-react"
import Planet from "@asset/planet.asset"
import { useDisclosure } from "@mantine/hooks"
import FormClass from "@form/class.form"
import CardClass from "@ui/card/class.card"

interface Props {
  planet_id: number,
  planet_name: string,
  planet_color: string,
  level_name: string,
}

export default function View({ planet_id, planet_name, planet_color, level_name }: Props) {
  return (
    <div className="flex flex-col justify-start items-center w-full px-2 h-full">
      <div className="flex flex-col items-center w-[64rem] max-w-[90%] h-full">
        <Header level_name={level_name} planet_id={planet_id} planet_name={planet_name} planet_color={planet_color} />

        <div className="flex flex-wrap justify-start w-full">
          {
            Array.from({ length: 3 }, (_, i) => (
              <div className="w-1/3 px-4 mb-8" key={`box-class-${i}`}>
                <CardClass class_id={i+1} class_name="Class" planet_id={planet_id} planet_name={planet_name} planet_color={planet_color} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

interface PropsHeader {
  level_name: string,
  planet_id: number,
  planet_name: string,
  planet_color: string,
}

function Header({ level_name, planet_id, planet_name, planet_color }: PropsHeader) {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <div className="flex flex-row justify-start items-start gap-2 w-full mb-8">
        <div className="flex flex-row justify-start items-center gap-2 w-full">
          <Planet
            width={40}
            height={40}
            planet_color={planet_color}
          />
          <h1 className="text-left text-2xl font-bold capitalize">{planet_name} - {level_name}</h1>
        </div>

        <Button
          variant="default"
          style={{ backgroundColor: planet_color, color: get_color(planet_name) }}
          className={`h-[2.8rem] rounded-full border-0`}
          onClick={open}
        >
          <Plus size={28} strokeWidth={2.8} />
          <span className="ml-1 font-bold">CREATE</span>
        </Button>
      </div>

      <Modal opened={opened} onClose={close} title={<p className="text-xl font-bold">Create New Class</p>} centered>
        <FormClass action="create" class_id={null} class_name="" planet_id={planet_id} planet_name={planet_name} planet_color={planet_color} close={close} />
      </Modal>
    </>
  )
}

function get_color(planet_name: any): string {
  if (['netras'].includes(planet_name)) return 'black'
  return 'white'
}