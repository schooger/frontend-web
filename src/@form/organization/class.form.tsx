import { Button, Input } from "@mantine/core"
import { useForm } from "@mantine/form"

interface Props {
  name?: string,
  grade?: number,
}

export default function ClassForm({ name, grade }: Props) {
  const form = useForm({
    mode: 'controlled',
    initialValues: {
      name: name,
      grade: grade,
    },
  });

  const submit = (values: any) => {
    console.log(values)
  }

  return (
    <form
      onSubmit={form.onSubmit((values) => submit(values))}
      className="w-full max-w-[24rem]"
    >
      <h1 className="text-2xl font-bold mb-4">Create New Class</h1>

      <Input
        {...form.getInputProps('name')}
        key={form.key('name')}
        variant="default"
        size="lg"
        radius="sm"
        placeholder="class name"
      />

      <div className="mt-4">
        <Button
          type="submit"
          fullWidth
          size="md"
          variant="filled"
          radius="sm"
          className="font-bold"
          aria-label='new class'
        >
          SUBMIT
        </Button>
      </div>
    </form>
  )
}