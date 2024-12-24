import { Button, Input, Paper } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Shapes } from "lucide-react";


interface PropsClassForm {
  action?: string,
  id?: number,
  name?: string,
  $_new_classes?: React.Dispatch<React.SetStateAction<{ id: number }[]>>,
  $_show_form: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function FormClass({ action, id, name, $_new_classes, $_show_form }: PropsClassForm) {
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
        <Shapes size={120} />

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
                ? <Button fullWidth type="button" variant="outline" className="mt-4 font-bold border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700" onClick={remove}>Cancel</Button>
                : <Button fullWidth type="button" variant="outline" className="mt-4 font-bold border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700" onClick={() => $_show_form(false)}>Cancel</Button>
            }
            <Button fullWidth type="submit" variant="filled" className="mt-4 font-bold">SAVE</Button>
          </div>
        </div>
      </Paper>
    </form>
  )
}