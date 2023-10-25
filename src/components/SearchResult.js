import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../utils/Api';
import { Context } from '../context/contextApi';
import Left_nav from './Left_nav';
import SearchResultVideoCard from './SearchResultVideoCard';

const SearchResult = () => {
  const [results, setResults] = useState();
  const [searchQuery,setSearchQuery]=useState();
  const {setLoading} =useContext(Context);

  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
  fetchSearchResult();
  },[searchQuery])

  const fetchSearchResult =()=>{
    setLoading(true)
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res)=>{
      console.log(res)
      setResults(res?.contents);
      setLoading(false);
    });
  };
  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
       <Left_nav />
       <div className='grow w-[clac(100%-140px)] h-full overflow-y-auto bg-black'>
        <div className='grid grid-cols-1 gap-2 p-5'>
         {results?.map((item)=>{
          if(item?.type!=="video") return false;
          let video=item?.video;
          return(
            <SearchResultVideoCard 
            key={video?.videoId}
            video={video}
            />
          )
         })}
        </div>

       </div>
    </div>
  )
}

export default SearchResult;