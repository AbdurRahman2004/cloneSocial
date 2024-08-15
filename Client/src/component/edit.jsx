import React, { useEffect,useState }  from "react";
import { useParams ,useNavigate} from "react-router-dom";
import axios from "axios";
import ReactQuill from 'react-quill';  // Import React Quill
import 'react-quill/dist/quill.snow.css';  // Import Quill's styles
import "./createpost.css";

function Edit(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [response, setResponse] = useState({ title: "", body: "" });

        useEffect(()=>
        async function editItem() {
            try{
           const res = await axios.get(`http://localhost:3001/posts/${id}`);
           if(!res) throw new Error("There is an error in editing the content");
            setResponse(res.data);
            }
            catch(e){
                console.log(e.message)
            }
        },[id]
    )

    async function handleSubmit(e){
        try{
          const strippedBody = response.body.replace(/<\/?p>/g, "");
            e.preventDefault();
        const res = await axios.patch(`http://localhost:3001/posts/${id}`,{
            title: response.title,
            body: strippedBody,
        });
        if(!res) throw new Error("Error occured");
        navigate("/")
        }catch(e){
            console.log(e);
        }
    }
        
    function handleChange(e){
        const {name , value} = e.target;
        setResponse((prevState)=>({ ...prevState,[name] : value}));
    }

    function handleEditorChange(value){
        setResponse((prevState)=>({...prevState,body : value}))
    }
        return(
            <>
            <div className="center-wrapper">
          <div className="post-form-container">
        <h2>Edit the Post</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={response.title}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <ReactQuill
              value={response.body}
              onChange={handleEditorChange}
              modules={Edit.modules}
              formats={Edit.formats}
              className="editor-container"
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div></>
        )

}


export default Edit;