export const Contacts = () => {
    return (
      <section className="contact_section layout_padding-bottom">
      <div className="container">
        <div className="d-flex flex-column align-items-end">
          <div className="custom_heading-container">
            
            <h2>
              Contact Us
            </h2>
          </div>
        </div>
        <div className="layout_padding-top layout_padding2-bottom">
          <div className="row">
            <div className="col-md-7">
              <form action="">
                <div className="contact_form-container">
                  <div>
                    <div>
                      <input type="text" placeholder="Name"/>
                    </div>
                    <div>
                      <input type="email" placeholder="Email"/>
                    </div>
                    <div>
                      <input type="text" placeholder="Phone Number"/>
                    </div>
                    <div className="">
                      <input type="text" placeholder="Message" className="message_input"/>
                    </div>
                    <div className="mt-5">
                      <button type="submit">
                        send
                      </button>
                    </div>
                  </div>
  
                </div>
  
              </form>
            </div>
            <div className="col-md-5">
              <div className="map-box">
                <div id="map">
                  <div className="map-responsive">
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_items">
  
          <a href="">
            <div className="item ">
              <div className="img-box box-2">
  
              </div>
              <div className="detail-box">
                <p>
                  +02 1234567890
                </p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="item ">
              <div className="img-box box-3">
  
              </div>
              <div className="detail-box">
                <p>
                  demo@gmail.com
                </p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="item ">
              <div className="img-box box-1">
  
              </div>
              <div className="detail-box">
                <p>
                  t will be distracted by the readable
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    )
}