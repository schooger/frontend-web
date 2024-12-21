import { useNavigate } from "@tanstack/react-router"

const navigate = useNavigate()

export default async function nav(link: string) {
  navigate({
    to: link,
  })
}
