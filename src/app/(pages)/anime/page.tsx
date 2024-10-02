"use client";
import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import BookCard from "@/components/BookCard";
import { useRouter } from "next/navigation";
function AnimePage() {
  // const router = useRouter();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [novels, setNovels] = useState([]);
  const pageSize: string = searchParams.get("pageSize") || "10";
  const page: string = searchParams.get("page") || "1";
  useEffect(() => {
    const fetchNovels = async () => {
      const response = await fetch(
        `/api/anime?pageSize=${pageSize}&page=${page}`
      );
      const result = await response.json();
      console.log(result.items);
      setNovels(result.items);
    };
    fetchNovels();
  }, [pageSize, page]);
  return (
    <div className="m-6">
      <div>
        <button onClick={()=>{
          const currPage = parseInt(page);
          if(currPage>1){
            router.push(`/anime?pageSize=10&page=${currPage-1}`);
          }
        }}>Prev Page</button>
        <button onClick={()=>{
          const currPage = parseInt(page);
          router.push(`/anime?pageSize=10&page=${currPage+1}`);
        }}>Next Page</button>
      </div>
      <div className="flex gap-10 flex-wrap w-full pl-10 overflow-x-hidden">
        {novels.map((novel, index) => {
          return <BookCard book={novel} key={index} />;
        })}
      </div>
    </div>
  );
}

export default AnimePage;
