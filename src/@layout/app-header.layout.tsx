

export default function AppHeader() {
  console.log('app-header')

  return (
    <div className="fixed top-0 left-0 w-full h-[3.6rem] pl-[18rem]">
      <div className="flex justify-between items-center pr-4">
        <div></div>
        <div
          style={{ backgroundImage: "url('/image.jpg')"}}
          className="w-[2.8rem] h-[2.8rem] mt-2 bg-white bg-no-repeat bg-cover bg-center rounded-full overflow-hidden"
        ></div>
      </div>
    </div>
  )
}