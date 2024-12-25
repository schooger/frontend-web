import { Button, Input, Paper } from "@mantine/core"
import { useForm } from "@mantine/form"
import Planet from "@asset/planet.asset"

interface PropsClassForm {
  action?: 'create' | 'update',
  class_id?: number | string,
  class_name?: string,
  planet_id: number,
  planet_name: string,
  planet_color: string,
  $_new_classes?: React.Dispatch<React.SetStateAction<{ id: number }[]>>,
  $_show_form: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function FormClass({ action, class_id, class_name, planet_id, planet_name, planet_color, $_new_classes, $_show_form }: PropsClassForm) {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      class_name: class_name,
      planet_id: planet_id,
    },
  });

  const submit = (values: any) => {
    console.log(values)
  }

  const remove = () => {
    if ($_new_classes) $_new_classes((prev) => prev.filter((item) => item.id !== class_id))
  }

  return (
    <form
      onSubmit={form.onSubmit((values) => submit(values))}
      className="w-full"
    >
      <Paper radius="md" p="md" className="flex flex-col justify-between items-center gap-4 w-full h-[18rem] bg-transparent overflow-hidden">
        <Planet
          width={100}
          height={100}
          planet_color={planet_color}
        />

        <div className="w-full">
          <Input
            {...form.getInputProps('class_name')}
            key={form.key('class_name')}
            variant="default"
            size="md"
            radius="sm"
            placeholder="class name"
          />

          <div className="flex justify-between items-center gap-2 w-full">
            {
              action === 'create'
                ? <Button fullWidth type="button" variant="outline" className="mt-4 font-extrabold border-2" style={{ borderColor: planet_color, color: ['hydro', 'iro'].includes(planet_name) ? 'black' : planet_color }} onClick={remove}>Cancel</Button>
                : <Button fullWidth type="button" variant="outline" className="mt-4 font-extrabold border-2" style={{ borderColor: planet_color, color: ['hydro', 'iro'].includes(planet_name) ? 'black' : planet_color }} onClick={() => $_show_form(false)}>Cancel</Button>
            }
            <Button
              fullWidth
              type="submit"
              variant="filled"
              style={{ backgroundColor: planet_color, color: get_color(planet_name) }}
              className="mt-4 font-bold"
            >SAVE</Button>
          </div>
        </div>
      </Paper>
    </form>
  )
}

function get_color(planet_name: any): string {
  if (['hydro', 'iro'].includes(planet_name)) return 'black'
  return 'white'
}