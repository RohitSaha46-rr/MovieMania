import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './content.css';
import './head.css';
import './media.css';
import axios from 'axios';
import spider from './images/spider1.jpg'; 
import pushpa from './images/pushpa.jpg';
import sardar from './images/sardar.jpg';
import jaibhim from './images/jaibhim.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Content = () => {
   
    const[input,updated_input]=useState("");
    const[name,updated_name]=useState("");
    const[year,updated_year]=useState("");
    const[released,updated_released]=useState("");
    const[genre,updated_genre]=useState("");
    const[runtime,updated_runtime]=useState("");
    const[icons,updated_icons]=useState("");
    const[imbd,updated_imbd]=useState("");
    const[image,updated_img]=useState("");
    const[lang,updated_lang]=useState("");
    const[count,updated_count]=useState("");
    const[overview,updated_overview]=useState("");
    const[plot,updated_plot]=useState("");
    const[director,updated_dire]=useState("");
    const[writer,updated_writer]=useState("");
    const[cast,updated_cast]=useState("");
    const[actors,updated_actors]=useState("");
    const[box,updated_box]=useState("");
    const[award,updated_award]=useState("");
    const[top,updated_top]=useState("Top Hits Of 2021!");
    const[spider1,updated_spider]=useState(spider);
    useEffect(() => {
      
      AOS.init({
         
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      });
      
    });
    
    const input_change=(elem)=>{
      updated_input(elem.target.value);
    }
    const spiderman=()=>{
      window.open('https://www.youtube.com/watch?v=JfVOs4VSpmA&t=1s');
    }
    const pushpa_trailer=()=>{
      window.open('https://www.youtube.com/watch?v=ou6h-22tMnA');
    }
    const sardar_trailer=()=>{
      window.open('https://www.youtube.com/watch?v=bLWgKt1-SYo');
    }
    const jaibhim_trailer=()=>{
      window.open('https://www.youtube.com/watch?v=nnXpbTFrqXA');
    }
   let cssStyle={};
   let cssStyle1={};
    const submit=async(e)=>{
    e.preventDefault();
    //const cssStyle={};
    let url=`https://www.omdbapi.com/?apikey=bd671bfb&t=${input}`;
             
    const jsondata=await axios.get(url);
    const jsdata=jsondata.data;
         console.log(jsdata);
        //const jsdata=await jsondata.json();
        if (jsdata.Response=="True")
    {
        updated_name(jsdata.Title);
        updated_year("("+jsdata.Year+")");
        updated_released(jsdata.Released+" || ");
        updated_genre(jsdata.Genre+" || ");
        updated_runtime(jsdata.Runtime);
        updated_icons(faHeart);
        updated_imbd(" "+jsdata.imdbRating+" Ratings IMBD ");
        updated_img(jsdata.Poster);
        updated_lang(jsdata.Language);
        updated_count(jsdata.Country);
        updated_overview("Overview");
        updated_plot(jsdata.Plot);
        updated_dire("Director : "+jsdata.Director+" || ");
       updated_writer("Writer : "+jsdata.Writer);
       updated_cast("Cast");
       updated_actors(jsdata.Actors);
       updated_box("Box Office : "+jsdata.BoxOffice);
       updated_award("Awards : "+jsdata.Awards);
       updated_top("");
       updated_spider("");
    }
    else{
        alert("Enter Correct Movie Name ");
    }
    }
    if(name!=""){
        cssStyle.backgroundColor="aliceblue";
       // cssStyle1.backgroundColor="#352f2f";
       cssStyle1.display="none";
    }
    
  return(
  <>
  <div className='head'>
  <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand" href="#">MovieMania</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button> 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-5">
        <li className="nav-item">
          <a className="" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="" href="/about">About</a>
        </li>
       
        
      </ul>
      <form className='d-flex'>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={input_change} value={input}></input>
        <button className="btn btn-outline-success"  onClick={submit}>Search</button>
      </form>
    </div>
  </div>
</nav>

  </div>


  <div className='content'>
      <div className='container'>
      <h1 className='text-center pt-4' style={{color:"whitesmoke",fontFamily:"'Montserrat', sans-serif",fontWeight:"bolder"}} data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="50">{top}</h1>
      <div className='row top' style={cssStyle1}>
      <div className='col-lg-3 col-xl-3 col-md-12 col-sm-12 col-xs-12 '>
                  <img className='mt-5' src={spider1} data-aos="flip-right" data-aos-duration="2000" data-aos-delay="500" onClick={spiderman} title='Watch trailer'></img>
                  <h4 className= 'pe-5 pt-3' style={{color:"whitesmoke",textAlign:"center"}} data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000">Spider-Man:No Way Home</h4>
              </div>
              <div className='col-lg-3 col-xl-3 col-md-12 col-sm-12 col-xs-12'>
                  <img className='mt-5' src={pushpa} data-aos="flip-right" data-aos-duration="2000" data-aos-delay="1000" onClick={pushpa_trailer} title='Watch trailer'></img>
                  <h4 className='pe-5 pt-3' style={{color:"whitesmoke",textAlign:"center"}}  data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000">Pushpa: The Rise</h4>
              </div>
              <div className='col-lg-3 col-xl-3 col-md-12 col-sm-12 col-xs-12'>
                  <img className='mt-5' src={sardar} data-aos="flip-right" data-aos-duration="2000" data-aos-delay="1500" onClick={sardar_trailer} title='Watch trailer'></img>
                  <h4 className='pe-5 pt-3' style={{color:"whitesmoke",textAlign:"center"}}  data-aos="fade-up" data-aos-delay="1500" data-aos-duration="2000">Sardar Udham</h4>
              </div>
              <div className='col-lg-3 col-xl-3 col-md-12 col-sm-12 col-xs-12'>
                  <img className='mt-5' src={jaibhim} data-aos="flip-right" data-aos-duration="2000" data-aos-delay="2000" onClick={jaibhim_trailer} title='Watch trailer'></img>
                  <h4 className='pe-5 pt-3' style={{color:"whitesmoke",textAlign:"center"}}  data-aos="fade-up" data-aos-delay="1800" data-aos-duration="2000" >Jai Bhim</h4>
              </div>
      </div>
          <div className='row'>
              <div className='col-lg-3 col-xl-3 col-md-12 col-sm-12 col-xs-12 left mt-5'>
                  <img src={image}></img>
              </div>
              <div className='col-lg-9 col-xl-9 col-md-12 col-sm-12 col-xs-12 right mt-4  '>
                  <h1 className='ms-2' >{name}{year}</h1>
                  <h5 className='ms-2' style={{color:"yellow"}}>{released}{genre}{runtime}</h5>
                  <h1  className='pt-3 ms-2' ><span style={{color:"red"}}><FontAwesomeIcon icon={icons} id="icon"></FontAwesomeIcon></span>{ imbd}</h1>
                  <div className='la_co'>
                  <div className='lang' style={cssStyle}>
                      <h3 style={{fontWeight:"bolder",fontFamily:"'Fjalla One', sans-serif"}}>{lang}</h3>
                  </div>
                  <div className='lang' style={cssStyle}>
                      <h3 style={{fontWeight:"bolder",fontFamily:"'Fjalla One', sans-serif"}}>{count}</h3>
                  </div>
                  </div>
                  <h3 style={{fontWeight:"bolder",color:"yellow"}} className='ms-2 pt-3'  >{overview}</h3>
                  <h5 className='ms-2 mt-1' >{plot}</h5>
                <h4 style={{fontFamily:"'Roboto Condensed', sans-serif",color:"yellow"}} className='ms-2 mt-3' >{director}{writer}</h4>
                <h3 className='mt-3 ms-2' style={{color:"red"}}>{cast}</h3>
                <h2 className='mt-1 ms-2' style={{fontWeight:"bolder",fontFamily:"'Fjalla One', sans-serif"}} >{actors}</h2>
              </div>
          </div>
      </div>
  </div>
  <div className='footer'>
      <h1>{box}</h1>
      <h1>{award}</h1>
  </div>
  </>
  );
};

export default Content;
