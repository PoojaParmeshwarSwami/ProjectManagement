import { createContext, useState } from "react";
import axios from "axios";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [data,setData] =useState([]);
    const fetchData = async()=>{
        try{
            const response = await axios.get("http://192.168.31.117:8085/api/list");

            if(response){
                setData(response.data);
            }

        }catch(error){

        }
    }

  return (
    <>
      <UserContext.Provider value={{data,setData,fetchData}}>{children}</UserContext.Provider>
    </>
  );
};
