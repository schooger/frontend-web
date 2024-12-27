import { Button, Modal } from "@mantine/core"
import { Plus } from "lucide-react"
import { useDisclosure } from "@mantine/hooks"
import FormClass from "@form/class.form"
import CardClass from "@ui/card/class.card"

export default function View() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <div className="flex flex-col justify-start items-center w-full px-2 h-full">
      <div className="flex flex-col items-center w-[64rem] max-w-[90%] h-full">
        <div className="flex flex-row justify-start items-start gap-2 w-full mb-8">
          <div className="flex flex-row justify-start items-center gap-2 w-full">
            <h1 className="text-left text-2xl font-bold capitalize">Classes</h1>
          </div>

          <Button
            variant="default"
            className={`h-[2.8rem] rounded-full border-0`}
            onClick={open}
          >
            <Plus size={28} strokeWidth={2.8} />
            <span className="ml-1 font-bold">CREATE</span>
          </Button>
        </div>

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
            Array.from({ length: 3 }, (_, i) => (
              <div className="w-1/3 px-4 mb-8" key={`box-class-${i}`}>
                <CardClass class_id={i + 1} class_name="Class" planet_id={6} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}