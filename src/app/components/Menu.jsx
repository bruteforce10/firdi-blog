import MenuPosts from "./MenuPost"
import MenuCategories from "./MenuCategory"

const Menu = () => {
  return (
    <div className="flex-[2] mt-16 lg:block hidden space-y-12">
      <div className="flex flex-col gap-2">
        <div>
      <h2 className="text-gray-500 text-base font-normal">{"What's hot"}</h2>
      <h1 className="text-[28px] font-bold">Most Popular</h1>
        </div>
      <MenuPosts withImage={false} />
      </div>

      <div className="flex flex-col gap-2">
      <h2 className="text-gray-500 text-base font-normal">Discover by topic</h2>
      <h1 className="text-[28px] font-bold">Categories</h1>
      <MenuCategories />
      </div>

      <div className="flex flex-col gap-2">
      <div> 
      <h2 className="text-gray-500 text-base font-normal">Chosen by the editor</h2>
      <h1 className="text-[28px] font-bold">Editors Pick</h1>
      </div>
      <MenuPosts withImage={true} />
      </div>
    </div>
  )
}

export default Menu

