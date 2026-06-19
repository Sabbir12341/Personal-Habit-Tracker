import { parseISO } from "date-fns";
import { useEffect, useState } from "react";


export function useLocalStorage<T>(key: string, initialValue:T){
    const [storedvalue,setStoredvalue]=useState(()=>{
        try{
            const item=localStorage.getItem(key);
            if(item==null) return initialValue;

            return JSON.parse(item, dateReviver)
        }
        catch{
            return initialValue
        }
    })
    useEffect(()=>{
      localStorage.setItem(key, JSON.stringify(storedvalue))
    },[storedvalue, key])
    return [storedvalue,setStoredvalue] as const
 }

 function dateReviver(_key: string, value:unknown){
    if(typeof value==="string" && /^\d{4}-\d{2}-\d{2}T/.test(value)){
     return  parseISO(value)
    }
    return value
 }