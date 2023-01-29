import React, { Component } from "react";

export default class NewsItem extends Component {


 

  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://images.livemint.com/img/2023/01/29/600x338/Garena_Free_Fire_Max_1674966071069_1674966071254_1674966071254.jpg"} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
             {description}...
            </p>
            <a href={newsUrl} className="btn btn-primary">
              Clik Here
            </a>
          </div>
        </div>
      </div>
    );
  }
}
