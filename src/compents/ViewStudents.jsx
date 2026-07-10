import React, { useState } from 'react'
import { NavBar } from './NavBar'

export const ViewStudents = () => {

    const [data,changeData] = useState(
        [
            {"name":"Thomas Shelby","avatar":"https://th.bing.com/th/id/OIP.ThkrFok0-n9HkCUe_LGXJAHaNK?w=116&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3 ","admn":"1105","Class":"MCA"},
            {"name":"Joker","avatar":" https://th.bing.com/th/id/R.fba6ecd5d2f7c7925177bceb222b09b1?rik=Ghf2DCU4j3SiZQ&riu=http%3a%2f%2fmedia.techeblog.com%2fimages%2fjoaquin-phoenix-joker.jpg&ehk=bl0nW7Dbn5gDa4Dm1mQ1oRYsz38uRyTfPAdVcWu6GvQ%3d&risl=&pid=ImgRaw&r=0","admn":"1305","Class":"MTECH"},
            {"name":"John Wick","avatar":"https://th.bing.com/th/id/OIP.zMA_TNRNWSWl0ZgnMNUlQwHaDt?w=349&h=175&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3 ","admn":"1102","Class":"MCA"},
            {"name":"Tony Stark","avatar":" https://th.bing.com/th/id/OIP.uqY8PjmZ9GFiwXqqMc27UAHaHa?w=168&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3","admn":"1205","Class":"MTECH"},
            {"name":"Steve Rogers","avatar":"https://imageio.forbes.com/specials-images/imageserve/6633ddebcf6f35cb7a555949/Leonardo-DiCaprio-arrives-for-the-92nd-Academy-Awards-/960x0.jpg?format=jpg&width=1440 ","admn":"1805","Class":"MBA"}
        ]

    )

    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {data.map(
                                (value,index) => {

                                    return(

                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <div class="card">
                                    <img src={value.avatar} class="card-img-top" alt="..." height="350" width="50" />
                                    <div class="card-body">
                                        <h5 class="card-title">{value.name}</h5>
                                        <p class="card-text">{value.admn}</p>
                                        <p class="card-text">{value.Class}</p>
                                        <a href="#" class="btn btn-primary">View Details</a>
                                    </div>
                                </div>


                            </div>
                           

                                    )

                                }
                            )}
                            
                        </div>



                    </div>
                </div>
            </div>


        </div>
    )
}
