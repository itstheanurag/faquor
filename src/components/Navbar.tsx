import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
  return (
    <div className="sticky top-4 m-4 px-4 flex items-center justify-between rounded border">
        <div className="text-2xl font-bold">faquor</div>
        <div className="flex items-center justify-between gap-4">
            <div className="m-4">Home</div> 
            <ModeToggle />
        </div>

    </div>
  )
}

export default Navbar