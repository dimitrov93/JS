export const About = () => {
    return (
        <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <h6>
                  About
                </h6>
                <div className="custom_heading-container">
                  <h2>
                    web elements
                  </h2>
                  
                </div>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem
                </p>
                <div>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.png" alt=""/>
              </div>
            </div>
          </div>
    
        </div>
      </section>
    )
}