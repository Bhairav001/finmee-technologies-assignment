import React from 'react'
import "./Page.css"
const Page = () => {
  return (
    <div>


<nav class="navbar navbar-expand-lg navbar-light">
     
        <img src="images/logo.png" alt=""/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Blog
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pages
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contact</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Get a Quote</button>
            </form>
        </div>
    </nav>


          <div id="image-slider" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" >
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                         
                            <div class="heading">
                                <h1>Grow big with musical business</h1>
                                <p>One small one-line paragraph here.</p>
                                <a href="#" class="btn1 btn-custom">Our Services</a>
                                <a href="#" class="btn2 btn-custom">How It Works</a>
                            </div>
                        </div>
                        <div class="col-md-6">
                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item" >
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                          
                            <div class="heading">
                                <h1>Grow big with musical business</h1>
                                <p>One small one-line paragraph here.</p>
                                <a href="#" class="btn1 btn-custom">Our Services</a>
                                <a href="#" class="btn2 btn-custom">How It Works</a>
                            </div>
                        </div>
                        <div class="col-md-6">
                         
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                        
                            <div class="heading">
                                <h1>Grow big with musical business</h1>
                                <p>One small one-line paragraph here.</p>
                                <a href="#" class="btn1 btn-custom">Our Services</a>
                                <a href="#" class="btn2 btn-custom">How It Works</a>
                            </div>
                        </div>
                        <div class="col-md-6">
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item" >
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="heading">
                                <h1>Grow big with musical business</h1>
                                <p>One small one-line paragraph here.</p>
                                <a href="#" class="btn1 btn-custom">Our Services</a>
                                <a href="#" class="btn2 btn-custom">How It Works</a>
                            </div>
                        </div>
                        <div class="col-md-6">
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="heading">
                                <h1>Grow big with musical business</h1>
                                <p>One small one-line paragraph here.</p>
                                <a href="#" class="btn1 btn-custom">Our Services</a>
                                <a href="#" class="btn2 btn-custom">How It Works</a>
                            </div>
                        </div>
                        <div class="col-md-6">
                           
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
        <a class="carousel-control-prev" href="#image-slider" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#image-slider" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

    <div class="container">
        <h1 class="custom-heading">Explore our Solutions</h1>
        <div class="row">
            <div class="col-lg-4 col-md-6 custom-div">
                <img class="custom-heading-text" src="./images/svg_icon/bar-chart.png" alt=""  />
                <h3 class="custom-heading-text" >Invoicing</h3>
                <img src="https://images.unsplash.com/photo-1654277041218-84424c78f0ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpdGh1YnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Image 1" />
            </div>

            <div class="col-lg-4 col-md-6 custom-div">
                <img class="custom-heading-text" src="./images/svg_icon/controls.png" alt="" />
                <h3 class="custom-heading-text" >Business Growth</h3>
                <img src="https://e0.pxfuel.com/wallpapers/478/564/desktop-wallpaper-github-3d-logo-gray-brickwall-creative-social-networks-github-logo-3d-art-github.jpg" alt="Image 2"/>
            </div>

            <div class="col-lg-4 col-md-12 custom-div">
              
                <img class="custom-heading-text" src="./images/svg_icon/puzzle.png" alt="" />
                <h3 class="custom-heading-text" >Problem Solving</h3>
                <img src="https://wallpapercave.com/wp/wp3082346.jpg" alt="Image 3"/>
            </div>
        </div>
    </div>


    <div class="container custom-container">
        <div class="row">
          
            <div class="col-md-6">
                <img src="https://wallpaperaccess.com/full/3415092.jpg" alt="Image" class="custom-image" />
            </div>
         
            <div class="col-md-6 custom-content">
                <h1>The Largest Business Exprert</h1>
                <p>These cases are perfectly simple and easy to distinguish in a free houre
                    when our power of choice is unstrammelled and when nothing prevents our
                    being able to do what we like beset
                </p>
                <ul>
                    <li>Apartments frequently or motionless</li>
                    <li>Duis aute lruere dolor in reprehendirit in voluptate</li>
                    <li>Voluptatem quia voluptas sit aspernatur</li>
                </ul>
                <a href="#" class="btn2 btn-custom">About us</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Page;