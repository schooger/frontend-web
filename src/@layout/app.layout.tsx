import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '../routeTree.gen'

// @ts-ignore
const router = createRouter({
  routeTree,
})

export default function App() {
  console.log('app')

  return (
    <div className="absolute top-0 left-0 z-10 w-full min-h-full pl-[14rem] pt-[3.75rem]">
      <RouterProvider router={router} />
    </div>
  )
}