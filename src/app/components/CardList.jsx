import Card from "./card"
import dummyPosts  from "@/constant/card-data"
import Pagination from "./Pagination"

const CardList = () => {

  return (
    <div className="flex-[5]">
      <h1 className="text-3xl font-bold my-4">Recent Posts</h1>
      <div className="flex flex-col">
        {dummyPosts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination />
    </div>
  )
}

export default CardList

