import { Button } from "@/components/ui/button"
import Link from "next/link"

function Home() {
  return (
    <main className="">
      <div>
        <div className="bg-green-800 p-14 flex flex-col text-white space-y-5">
            <h1 className="text-xl font-bold font-mono">
            custom private server file storage
            </h1>
            <Button variant={"outline"} className="space-y-2 w-48 font-mono">
              <Link href="/dashboard">upload some files</Link>
            </Button>
        </div>
      </div>
    </main>
  )
}

export default Home