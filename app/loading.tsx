export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-[#E32929] animate-spin"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-b-4 border-neutral-200 opacity-25"></div>
      </div>
    </div>
  )
}

