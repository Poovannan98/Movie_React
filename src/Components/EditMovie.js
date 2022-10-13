import React,{useState,useEffect} from 'react'
import './AddMovie.css'
import {useParams,useNavigate} from 'react-router-dom'
function EditMovie(props) {

    let params = useParams();
    let navigate = useNavigate();
    let [name,setName] = useState("");
    let [rating,setRating] = useState("");
    let [poster,setPoster] = useState("");
    let [summary,setSummary] = useState("");

    useEffect(()=>{
        if(params.id<props.data.users.length)
        {
            setName(props.data.users[params.id].name)
            setRating(props.data.users[params.id].email)
            setPoster(props.data.users[params.id].mobile)
            setSummary(props.data.users[params.id].batch)
        }
        else
        {
            navigate('/dashboard')
        }
    },[])

    
    let handleSubmit = ()=>{
      let newData = {name,email,mobile,batch}
      //take a deep clone of the state
      let data = [...props.data.users]
      //replace the data to the new clone
      data.splice(params.id,1,newData)
      //update the state with the new cloned variable
      props.data.setUsers(data)
      navigate('/dashboard')



    }
  return <>
  <div className="addmovie-container">
      <div className="addmovie-form">
        <div className="addmovie-form-content">
          <h3 className="addmovie-form-title">Add Movies</h3>
          <div className="form-group mt-3">
            <label>Movie Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Movie Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
          <label>Rating</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Rating"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
          <label>Poster</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Poster URL"
              onChange={(e) => setPoster(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
          <label>Summary</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Summary"
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button  className="btn btn-primary"
              onClick={()=>handleSubmit()}>
              Edit Movie
            </button>                  
          </div>          
        </div>
      </div>
    </div>
  </>
}

export default EditMovie