import React,{useState , useEffect} from 'react'
import axios from "axios";
import Games from "./Games";
function Navbar(){

  const [game ,setGame] = useState([]);
  useEffect(()=>{
    async function callApi(){
    const res = await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json');
    const  entry = res.data; 
      
    entry.splice(0,1);
    setGame(entry);
    
  }
  callApi();
  },[])
  const [list ,setList] = useState(game);
  
  
  
  const [search,setSearch] = useState("");
   function handleChange(event){
    const result   = event.target.value;
    setSearch(result);
    if(search != ""){
      const str = game.title;
      const  nlist  = game.filter(function (str){
        return str.includes(search);
      })  
      setList(nlist);
    }
    else{
      setList(game);
    }
    
  }
  

  function createEntry(value){
    return (
    
      <Games 
  
        title  =  {value.title}
        platform  = {value.platform}
        score = {value.score}
        genre  =  {value.genre}
        edit =  {value.editors_choice}
   />
      
    );
    } 
    

    return(
      <div>  
        <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-primary" href="#">GameRanker</a>
          
        <form class="d-flex" role="search">
            <input class="form-control me-2" onChange={handleChange} type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit" >Search</button>
          </form>
         
      </div>
    </nav>
        
        {game.map(createEntry)}
    </div>
  
    );
}
export default Navbar;