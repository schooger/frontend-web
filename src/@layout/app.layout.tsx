import AppHeader from "./app-header.layout"
import AppNavbar from "./app-navbar.layout"
import Test from "./test"

export default function App() {
  console.log('app')

  return (
    <div>
    <img
      src="/background.svg"
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      style={{ filter: 'blur(100px)' }}
    />
      <AppHeader />
      <AppNavbar />

      <div className="w-full min-h-[40rem] pl-[18rem] pr-[1rem] py-[3rem]">
        <Test />
      </div>
    </div>
  )
}