import React from 'react';

//import generateVoteCount from './generate-vote';

import Product from './product.component';


class ProductList extends React.Component{
    constructor(){
        super();
        
        this.state ={
            data: [
                {
                  id: 1,
                  title: 'Yellow Pail',
                  description: 'On-demand sand castle construction expertise.',
                  url: '#',
                  //votes: generateVoteCount(),
                  submitter_avatar_url: 'images/avatars/daniel.jpg',
                  product_image_url: 'https://react.semantic-ui.com/images/avatar/small/rachel.png',
                },
                {
                  id: 2,
                  title: 'Supermajority: The Fantasy Congress League',
                  description: 'Earn points when your favorite politicians pass legislation.',
                  url: '#',
                  //votes: generateVoteCount(),
                  submitter_avatar_url: 'images/avatars/kristy.png',
                  product_image_url: 'https://react.semantic-ui.com/images/avatar/small/lindsay.png',
                },
                {
                  id: 3,
                  title: 'Tinfoild: Tailored tinfoil hats',
                  description: 'We already have your measurements and shipping address.',
                  url: '#',
                 // votes: generateVoteCount(),
                  submitter_avatar_url: 'images/avatars/veronika.jpg',
                  product_image_url: 'https://react.semantic-ui.com/images/avatar/small/matthew.png',
                },
                {
                  id: 4,
                  title: 'Haught or Naught',
                  description: 'High-minded or absent-minded? You decide.',
                  url: '#',
                  //votes: generateVoteCount(),
                  submitter_avatar_url: 'images/avatars/molly.png',
                  product_image_url: 'https://react.semantic-ui.com/images/avatar/small/molly.png',
                },
              ]
        }
    }
    render(){
        return(
            <div class="ui divided items">
                {
                    this.state.data.map(({title, description, product_image_url, votes, id}) =>(
                      <Product key={id} title={title} description={description} product_image_url={product_image_url}/>  
                    ))
                }
            </div>
        )
    }
};


export default ProductList;