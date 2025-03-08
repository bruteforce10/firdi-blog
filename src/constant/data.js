
const categories = [
    {
      _id: "1",
      title: "style",
      slug: "style",
      img: "/style.png",
    },
    {
      _id: "2",
      title: "fashion",
      slug: "fashion",
      img: "/fashion.png",
    },
    {
      _id: "3",
      title: "food",
      slug: "food",
      img: "/food.png",
    },
    {
      _id: "4",
      title: "travel",
      slug: "travel",
      img: "/travel.png",
    },
    {
      _id: "5",
      title: "culture",
      slug: "culture",
      img: "/culture.png",
    },
    {
      _id: "6",
      title: "coding",
      slug: "coding",
      img: "/coding.png",
    },
  ]

  const getCategoryColor = (slug) => {
    const colors = {
      style: "bg-blue-300/20",
      fashion: "bg-pink-300/20",
      food: "bg-green-300/20",
      travel: "bg-orange-300/20",
      culture: "bg-amber-300/30",
      coding: "bg-indigo-300/20",
    }
  
    return colors[slug] || "bg-gray-200"
  }

  export {categories, getCategoryColor}