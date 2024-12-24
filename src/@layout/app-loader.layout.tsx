import { Loader } from "@mantine/core"

export default function AppLoader() {
  return (
    <div className="flex justify-center flex-col items-center w-full py-8">
      <Loader color="#444" size="md" type="dots" />
    </div>
  )
}