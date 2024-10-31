import { auth } from "@clerk/nextjs"
import FileDropArea from "@/components/FileDropArea"

function Dashboard() {

  const { userId } = auth()

  return (
    <div>
        <div>
            <FileDropArea />
        </div>
        <div className="fixed bottom-4 w-full text-center font-mono text-sm">
            logged in user is {userId}
        </div>
    </div>
  )
}

export default Dashboard