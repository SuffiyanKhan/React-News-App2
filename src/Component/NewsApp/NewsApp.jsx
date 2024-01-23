import React, { useEffect, useState } from 'react'
import "./NewsApp.css"
// import getText from "../Navbar/Navbar"
import logo from "../Assets/globel2.png";

export default function NewsApp() {
   let[news,setNews]=useState([]);
   let[getInput,setGetInput]=useState("")
    useEffect(()=>{
        fetch("https://newsapi.org/v2/everything?q=sports&from=2024-01-19&sortBy=popularity&apiKey=665574fb544d4aaab8f9c96309f3adb3")
    .then(res => res.json())
    .then (res => {
        setNews(res.articles)
    })
    },[])
    let getText=(e)=>{
        setGetInput(e.target.value)
    }
    let search=()=>{
        console.log(getInput)
        getData(getInput)
    }
    let getData=(data)=>{
        fetch(`https://newsapi.org/v2/everything?q=${data}&from=2024-01-19&sortBy=popularity&apiKey=665574fb544d4aaab8f9c96309f3adb3`)
    .then(res => res.json())
    .then (res => {
        setNews(res.articles)
    })
    }
    // let sports=()=>{
    //     fetch(`https://newsapi.org/v2/everything?q=sports&from=2024-01-19&sortBy=popularity&apiKey=665574fb544d4aaab8f9c96309f3adb3`)
    // .then(res => res.json())
    // .then (res => {
    //     setNews(res.articles)
    // })
    //     console.log("hi")
    // }
  return (
    <div>
         <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="logo">
                        <h3>Gl<span><img src={logo} alt="" /></span>ble News</h3>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse ul" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page"  >Sports</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Politics</a>
                            </li> */}
                        </ul>
                        <form className="d-flex" role="search">
                        <input onChange={getText} className='form-control me-2' type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={search} className="btn btn">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
           <div className="newsCards" id='newsCards'>
            {
                news.map( (data,i) =>{
                    if(data.urlToImage){
                        if(data.title){
                            if(data.url){
                                return <div className='card' key={i}>
                    <img src={data.urlToImage} alt="Fissure in Sandstone" className='card-img-top' />
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text"></p>
                        <a href={`${data.url}`} target='_blank' className="btn btn-primary">Learn More</a>
                    </div>
                </div>
                            }
                        }
                    }
                })
            }
        </div>
    </div>
  )
}
