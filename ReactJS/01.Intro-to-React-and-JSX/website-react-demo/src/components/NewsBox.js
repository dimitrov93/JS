export const NewsBox = (props) => {
    return (
        <div className="box">
        <div className="img-box">
          <img src={props.src} alt=""/>
        </div>
        <div className="action-box">
          <div className="action">
            <a href="">
              <img src="images/like.png" alt=""/>
            </a>
            <a href="">
              <img src="images/comment.png" alt=""/>
            </a>
            <a href="">
              <img src="images/share.png" alt=""/>
            </a>
          </div>
        </div>
        <div className="detail-box">
          <h4>
            elements good design
          </h4>
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
    )
}