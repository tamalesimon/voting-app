import React from 'react';

const Product = ({title, description, votes, product_image_url}) => (

  
  <div class="item">
    <div class="image"><img src={`${product_image_url}`} alt=""/></div>
    <div class="middle aligned content">
      <a class="header">{title}</a>
      <div class="meta"><span class="cinema">{votes}</span></div>
      <div class="description">
        <span>{description}</span>
      </div>
      <div class="extra">
        <div class="ui label">
        <i aria-hidden="true" class="comment icon"></i>
        &nbsp;2,048
        </div>
        <div class="ui label">
          <i aria-hidden="true" class="globe icon"></i>
          Additional Languages
        </div>
      </div>
    </div>
  </div>

)
 
export default Product;