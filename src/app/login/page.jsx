


const LoginPage = () => {
 
  return (
    <div className="flex items-center justify-center my-10">
      <div className="bg-muted p-8 sm:p-12 md:p-[150px_200px] flex flex-col gap-8 md:gap-12 rounded-lg">
        <button
          className="py-5 px-4 rounded-md border-none text-white font-bold cursor-pointer flex items-center justify-center bg-[#ff5555] hover:bg-[#ff3333] transition-colors"
        >
          Sign in with Google
        </button>
        <button
          className="py-5 px-4 rounded-md border-none text-white font-bold cursor-pointer flex items-center justify-center bg-[#111] hover:bg-black transition-colors"
        >
          Sign in with Github
        </button>
        <button
          className="py-5 px-4 rounded-md border-none text-white font-bold cursor-pointer flex items-center justify-center bg-[#087bea] hover:bg-[#0066cc] transition-colors" 
        >
          Sign in with Facebook
        </button>
      </div>
    </div>
  )
}

export default LoginPage

