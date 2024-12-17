import { useEffect, useState } from "react";
import { Badge, Button, Skeleton, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { ArrowUp } from 'lucide-react';
import { useQuery } from "@tanstack/react-query";
import api from '@api/ai/assistant.api'

export default function Form() {
  const { isPending, isError, data: $lang } = useQuery<{ [key: string]: any }, Error>({
    queryKey: ['lang/form/ai/assistant'],
    queryFn: async () => (await import(`@lang/${localStorage.getItem('lang') || 'en'}/form/ai/assistant.lang.ts`)).default,
  })

  const [isFocus, _isFocus] = useState(false);
  const form = useForm({
    mode: 'controlled',
    initialValues: {
      userInput: '',
    },
  });
  const length = form.getValues().userInput.length;
  const maxLength = 200;
  const remainingLength = maxLength - length
  const errorMessage = remainingLength < 0 ? true : false;

  const { fetchStatus: submitFormStatus, refetch: submitForm } = useQuery({
    queryKey: ['api/ai/assistant'],
    queryFn: async () => await api(),
    enabled: false,
  });

  const submit = async (values: any) => {
    console.log(values)
    const { data } = await submitForm()
    console.log(data)
  }

  const circle = document.getElementById('circle')
  
  useEffect(()=>{
    if(circle){
      if(submitFormStatus === 'idle') circle.style.fill = 'transparent'
      if(submitFormStatus === 'fetching') circle.style.fill = '#fbbf24'
    }
  }, [submitFormStatus])

  return (
    <>
      {
        (isPending) ? <Skeleton height="7rem" radius="lg" />
          : (isError) ? <h1 className="text-md text-red-500 mt-4">something went wrong!</h1>
            :
            <form onSubmit={form.onSubmit((values) => submit(values))}>
              <Textarea
                {...form.getInputProps('userInput')}
                key={form.key('userInput')}
                onFocus={() => _isFocus(true)}
                onBlur={() => _isFocus(false)}
                variant="default"
                size="xl"
                radius="lg"
                placeholder={$lang?.how_can_i_assist_you}
                error={errorMessage}
                autosize
                maxRows={8}
                classNames={{
                  input: 'pb-[4rem_!important]',
                }}
              />

              <div className="absolute left-4 bottom-2">
                {
                  (isFocus || remainingLength < 0) &&
                  <Badge variant="light" color={remainingLength < 0 ? 'red' : remainingLength < 4 ? 'yellow' : 'blue'}>
                    {
                      remainingLength
                    }
                  </Badge>
                }
              </div>

              <div className="absolute right-3 bottom-2">
                <Button
                  type="submit"
                  variant="filled"
                  radius="xl"
                  color={(remainingLength < 0) ? 'red' : '#1a73e8'}
                  classNames={{
                    root: `w-[2rem_!important] h-[2rem_!important] p-[0rem_!important] ${(remainingLength < 0) ? 'bg-[#fa5252_!important] text-[#fff_!important]' : '#1a73e8 text-[#fff_!important]'}`,
                  }}
                  loading={submitFormStatus === 'fetching'}
                  disabled={(length > 0 && remainingLength >= 0) ? false : true}
                  aria-label='ask schooger'
                >
                  <ArrowUp strokeWidth={3.5} />
                </Button>
              </div>
            </form>
      }
    </>
  )
}