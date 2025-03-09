import { signIn, auth } from "@/utils/auth"
import { redirect } from "next/navigation"

const LoginPage = async () => {
  const session = await auth()
  
  if (session) {
    redirect("/")
  }
 
  return (
    <div className="flex items-center justify-center my-10">
      <div className="bg-muted p-8 sm:p-12 md:p-[150px_200px] flex flex-col gap-8 md:gap-12 rounded-lg">
      <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className="py-5 px-4 rounded-md border-none text-white font-bold cursor-pointer flex items-center justify-center bg-[#ff5555] hover:bg-[#ff3333] transition-colors">Signin with Google</button>
    </form>
      </div>
    </div>
  )
}

export default LoginPage

