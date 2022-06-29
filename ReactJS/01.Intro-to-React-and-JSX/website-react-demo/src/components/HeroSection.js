export const HeroSection = () => {
    return (  <div className="hero_area">
    header section strats
   <header className="header_section">
     <div className="container-fluid">
       <nav className="navbar navbar-expand-lg custom_nav-container ">
         <a className="navbar-brand" href="index.html">
           <img src="images/logo.png" alt=""/>
           <span>
             ELEMENTS
           </span>
         </a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
             <ul className="navbar-nav  ">
               <li className="nav-item active">
                 <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="about.html">About </a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="service.html">Services </a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="portfolio.html"> Portfolio</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="news.html"> news </a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="contact.html">Contact us</a>
               </li>
             </ul>
           </div>
           <div className="quote_btn-container  d-flex justify-content-center">
             <a href="">
               <img src="images/call.png" alt=""/>
               CALL : +01 1234567890
             </a>
             <a href="">
               <span>
                 @
               </span>
               demo@gmail.com
             </a>
           </div>
         </div>
       </nav>
     </div>
   </header>
    end header section
    slider section
   <section className=" slider_section position-relative">

     <div className="slider_bg-container">

     </div>
     <div className="slider-container">

       <div className="detail-box">
         <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
           <span className="sr-only">Previous</span>
         </a>
         <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
           <span className="sr-only">Next</span>
         </a>
         <h1>
           DiscoverING 
           SOMETHING 
           NEW BRAND
         </h1>
         <p>
           It is a long established fact that a reader will be distracted by the readable content of a page when
           looking at its layout. The point of using Lorem
         </p>
         <div>
           <a href="" className="slider-link">
             CONTACT US
           </a>
         </div>
       </div>
       <div className="img-box">
         <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
           <div className="carousel-inner">
             <div className="carousel-item active">
               <img src="images/slider-img.jpg" alt=""/>
             </div>
             <div className="carousel-item">
               <img src="images/slider-img.jpg" alt=""/>
             </div>
             <div className="carousel-item">
               <img src="images/slider-img.jpg" alt=""/>
             </div>
           </div>

         </div>

       </div>
     </div>
   </section>
 </div>
 )
}