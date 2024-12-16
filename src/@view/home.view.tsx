import { useState } from "react";
import AppLoader from "@layout/app-loader.layout"
import { Badge, Button, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { ArrowUp } from 'lucide-react';
import { useQuery } from "@tanstack/react-query";

export default function View() {
  const { isPending, isError, data: $lang } = useQuery<{ [key: string]: any }, Error>({
    queryKey: ['view/home.lang'],
    queryFn: async () => (await import(`@lang/${localStorage.getItem('lang') || 'en'}/view/home.lang.ts`)).default,
  })

  const form = useForm({
    mode: 'controlled',
    initialValues: {
      userInput: '',
    },
  });
  const [isFocus, _isFocus] = useState(false);

  const length = form.getValues().userInput.length;
  const maxLength = 1000;
  const remainingLength = maxLength - length
  const errorMessage = remainingLength < 0 ? true : false;

  return (
    <>
      {
        (isPending) ? <AppLoader />
          : (isError) ? <h1 className="text-md text-red-500 mt-4">something went wrong!</h1>
            :
            <div className="flex justify-center items-center flex-col h-screen pb-[12rem]">
              <div className="text-3xl font-bold mb-4">
                <span className="text-[#444]">{$lang?.ask_schooger_for_help}</span>
              </div>

              <div className="relative w-[90%] max-w-[40rem] h-auto">
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
                      disabled={(length > 0 && remainingLength >= 0) ? false : true}
                    >
                      <ArrowUp strokeWidth={3.5} />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
      }
    </>
  )
}