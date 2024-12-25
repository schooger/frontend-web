import Planet from "@asset/planet.asset"

interface Props {
  class_id: number,
}

export default function View({ class_id }: Props) {

  return (
    <div className="flex flex-col justify-start items-center w-full px-2 h-full">
      <div className="flex flex-col items-center w-[64rem] max-w-[90%] h-full">
        <div className="flex flex-row justify-start items-start gap-2 w-full mb-8">
          <div className="flex flex-row justify-start items-center gap-2 w-full">
            <Planet
              width={40}
              height={40}
              planet_color={'black'}
            />
            <h1 className="text-left text-3xl font-bold capitalize">{class_id} - {}</h1>
          </div>

        </div>
      </div>
    </div>
  )
}