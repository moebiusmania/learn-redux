'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as GalleryActions from './../store/actions';

// const flickrImages = [
//   "https://farm2.staticflickr.com/1553/25266806624_fdd55cecbc.jpg",
//   "https://farm2.staticflickr.com/1581/25283151224_50f8da511e.jpg",
//   "https://farm2.staticflickr.com/1653/25265109363_f204ea7b54.jpg",
//   "https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg",
//   "https://farm2.staticflickr.com/1450/25888412766_44745cbca3.jpg"
// ];

// export default class Gallery extends Component {
export class Gallery extends Component {
  // constructor(props) {
  //   super(props);
  //   this.props.dispatch({type: 'TEST'});
  //   console.log(props);
  //   // this.state = {
  //   //   // images: flickrImages,
  //   //   // selectedImage: flickrImages[0]
  //   //   images: [],
  //   //   selectedImage: undefined
  //   // }
  // }

  // componentDidMount() {
  //   const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
  //   const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`;
  //
  //   fetch(API_ENDPOINT).then((response) => {
  //     return response.json().then((json) => {
  //       const images = json.photos.photo.map(({farm, server, id, secret}) => {
  //           return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
  //       });
  //
  //       this.setState({images, selectedImage: images[0]});
  //     })
  //   })
  // }
  //
  // handleThumbClick(selectedImage) {
  //   this.setState({
  //     selectedImage
  //  })
  // }

  render() {
    // const {images, selectedImage} = this.state;
    // const {images, selectedImage} = this.props;
    const {images, selectedImage, dispatch} = this.props;
    return (
      <div className="image-gallery">
        <div className="gallery-image">
          <div>
            <img src={selectedImage} />
          </div>
        </div>
        <div className="image-scroller row">
          {images.map((image, index) => (
            // <div key={index} onClick={this.handleThumbClick.bind(this,image)}
            // <div key={index}
            // <div key={index} onClick={() => dispatch({type:'IMAGE_SELECTED', image})}
            <div key={index} onClick={() => dispatch(GalleryActions.selectImage(image)) }
            className="col-xs-6">
              <img src={image}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
    selectedImage: state.selectedImage
  }
}

export default connect(mapStateToProps)(Gallery);
