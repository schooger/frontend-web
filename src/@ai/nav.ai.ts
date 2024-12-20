import { useNavigate } from "@tanstack/react-router"

const navigate = useNavigate()

export default async function nav(target: string) {
  await new Promise(r => setTimeout(r, 1000))
  navigate({
    to: `/${target}`,
  })
}
