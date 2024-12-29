import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '../routeTree.gen'

// @ts-ignore
const router = createRouter({
  routeTree,
})

export default function App() {
  return (
    <div className="w-full min-h-full px-[12.5rem] pt-[.375rem] pb-[8rem]">
      <RouterProvider router={router} />
    </div>
  )
}