import axios from "axios";
import React, { useEffect }  from "react";
import { useParams ,useNavigate} from "react-router-dom";

function Delete(){
  const {id} = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    async function deleteItem(){
        try{
            const res = await axios.delete(`http://localhost:3001/posts/${id}`);
            if(!res) throw new Error("Please Visit after sometimes")
            navigate("/");
        }
        catch(e){
          const error = e.message || "";
          console.log(error)
        }
    }

    deleteItem();
  },[id, navigate]);
    return(
        <>
        </>
    )
}

export default Delete;