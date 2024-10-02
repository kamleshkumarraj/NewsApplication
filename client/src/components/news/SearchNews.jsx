import { useContext } from "react"
import SimpleDetailsNewCard from "./items/SimpleDetailsNewCard"
import { SearchDataContext } from "../../contexts/provideSearchData"


const SearchNews = () => {
   const {filteredData} = useContext(SearchDataContext)
    
    return (
        <div className="grid w-full grid-cols-1 gap-[1.5rem] my-[1rem] md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 px-[2rem]  border-[1px]">
            {
                filteredData && filteredData.length > 0 && filteredData.map((item, i) => (
                    <SimpleDetailsNewCard key={i} news={item} type="details-news" height={200} />
                ))
            }
        </div>
    )
}

export default SearchNews