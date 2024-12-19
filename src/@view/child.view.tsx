import { Button, Input, Select } from '@mantine/core';
import { useState, useEffect } from 'react';

export default function View() {
  const [loading, setLoading] = useState(false);
  /*
    useEffect(() => {
      const fetchData = async () => {
        await new Promise(r => setTimeout(r, 8000))
        setLoading(false)
      };
  
      fetchData();
    }, []);*/

  if (loading) return <div>Loading...</div>

  const [show, _show] = useState(false)

  return (
    <>
      <div>Child 1</div>
      <button onClick={() => _show(p => !p)} id="new_class">click me</button>
      {
        show && <Form />
      }
    </>
  )
};

const Form = () => {
  const [isLoading, _isLoading] = useState(false)
  const submit = async (e: any) => {
    e.preventDefault()
    _isLoading(true)
    await new Promise(r => setTimeout(r, 8000))
    _isLoading(false)
    alert('submited')
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={submit}>
      <Input id="new_class_form_name" size="xl" placeholder="Input component" />

      <Select
        id="new_class_form_level"
        placeholder="Select placeholder"
        size="xl"
        data={[
          { label: 'select level', value: '0' },
          { label: 'Level 1', value: '1' },
          { label: 'Level 2', value: '2' },
          { label: 'Level 3', value: '3' },
          { label: 'Level 4', value: '4' },
          { label: 'Level 5', value: '5' },
          { label: 'Level 6', value: '6' },
        ]}
        />

      <Button
        type="submit"
        id="new_class_form_submit"
        variant="filled"
        size="xl"
        loading={isLoading}
        aria-label='submit new class'
      >submit</Button>
    </form>
  )
}