import Image from "next/image"
import React, { useState, useRef, useEffect } from "react"
import "twin.macro"
import { Pokemon } from "../../types"
import useOutsideClick from "../../hooks/useOutsideClick"

export type SearchBarProp={
    placeholder:string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
    searchResult:Pokemon[]
}

export default function SearchBar({placeholder="Type to search ...", setSearchTerm, searchResult}:SearchBarProp):JSX.Element {
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(false)
    const searchRef = useRef(null)
    const initial = useRef(true)

    useOutsideClick(searchRef, ()=>setActive(false));


    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
        setQuery(event.target.value)
        setActive(true)
    }

    function updateSearch(pokemon:string){
        setActive(false)
        setQuery(pokemon)
    }

    useEffect(()=>{
        if(initial.current){
            initial.current=false;
            return;
        }
        const timer = setTimeout(()=>{
            setSearchTerm(query)
        },500)
        return ()=> clearTimeout(timer)
    },[setSearchTerm, query])


    return(
        <div
            tw='mb-8 mx-auto w-full md:w-4/5 relative max-w-3xl shadow-lg rounded-full z-10'
            ref={searchRef}
        >
            <div tw='absolute top-3.5 left-4'>
                <Image 
                    className="search-icon" 
                    src="/search-icon.svg" 
                    alt="search-icon" 
                    width={32} 
                    height={32}
                    priority
                />
            </div>
            <input
                tw='border-none w-full p-4 pl-8 rounded-full text-center text-lg focus:(outline-color[blightskyblue] rounded-2xl)'
                placeholder={placeholder}
                type='text'
                value={query}
                onChange={handleChange}
            />
                {active && query &&
                    <ul tw='bg-white absolute w-full top-12 max-h-48 pt-4 pb-2 rounded-b-lg overflow-auto z-index[-1]'>
                        {searchResult
                        .slice(0, 15)
                        .map((result, index) => (
                            <li 
                                tw='p-2 pl-8 text-base'
                                key={index} 
                                onClick={()=>updateSearch(result.name)} 
                                >
                                {result.name}
                            </li>
                        ))}
                    </ul>
                    }
        </div>
    )
}