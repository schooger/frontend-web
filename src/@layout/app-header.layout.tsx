

export default function AppHeader() {
  console.log('app-header')

  return (
    <div className="fixed top-0 left-0 w-full h-[3rem] pl-[18rem]">
      <div className="flex justify-between items-center px-2">
        <div></div>
        <img
          src="/background.svg"
          className="w-[2.4rem] h-[2.4rem] mt-1 bg-white rounded-full overflow-hidden"
        />
      </div>
    </div>
  )
}