import { Button, Input, Paper } from "@mantine/core"
import { useForm } from "@mantine/form"
import Planet from "@asset/planet.asset"

interface PropsClassForm {
  action?: string,
  id?: number,
  name?: string,
  planet_name: string,
  planet_color: string,
  $_new_classes?: React.Dispatch<React.SetStateAction<{ id: number }[]>>,
  $_show_form: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function FormClass({ action, id, name, planet_name, planet_color, $_new_classes, $_show_form }: PropsClassForm) {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: name,
    },
  });

  const submit = (values: any) => {
    console.log(values)
  }

  const remove = () => {
    if ($_new_classes) $_new_classes((prev) => prev.filter((item) => item.id !== id))
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
                planet_fill={planet_color}
              />

        <div className="w-full">
          <Input
            {...form.getInputProps('name')}
            key={form.key('name')}
            variant="default"
            size="md"
            radius="sm"
            placeholder="class name"
          />

          <div className="flex justify-between items-center gap-2 w-full">
            {
              action === 'create'
                ? <Button fullWidth type="button" variant="outline" className="mt-4 font-extrabold border-2" style={{ borderColor: planet_color, color: ['argo', 'silvo', 'goldo'].includes(planet_name) ? 'black' : planet_color }} onClick={remove}>Cancel</Button>
                : <Button fullWidth type="button" variant="outline" className="mt-4 font-extrabold border-2" style={{ borderColor: planet_color, color: ['argo', 'silvo', 'goldo'].includes(planet_name) ? 'black' : planet_color }} onClick={() => $_show_form(false)}>Cancel</Button>
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
  if (['argo', 'silvo', 'goldo'].includes(planet_name)) return 'black'
  return 'white'
}