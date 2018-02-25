import React from 'react';

export default class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mypics: [
        "./images/barrels-small.jpg",
        "./images/hawaii-dance-small.jpg",
        "./images/karrett-small.jpg",
      ],
      pic1: 0,
      pic2: 1,
      pic3: 2,
      myInt: null
    }
    this.rotate = this.rotate.bind(this);
  }

  componentDidMount() {
    //this.myInt= setInterval(this.rotate,3000);
  }

  componentWillUnmount() {
    //clearInterval(this.myInt);
  }

  rotate() {
    let Len = this.state.mypics.length;

    if (this.state.pic1 + 1 < Len) {
      this.setState({
        pic1: this.state.pic1 + 1
      })
    }
    else {
      this.setState({
        pic1: 0
      })
    }
    if (this.state.pic2 + 1 < Len) {
      this.setState({
        pic2: this.state.pic2 + 1
      })
    }
    else {
      this.setState({
        pic2: 0
      })
    }
    if (this.state.pic3 + 1 < Len) {
      this.setState({
        pic3: this.state.pic3 + 1
      })
    }
    else {
      this.setState({
        pic3: 0
      })
    }
  }


  render() {
    return (
      <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
          <h2>The Wedding of Kristin Kwasnik & Andy Tiffany</h2>
          <h3>Friday, August 17th, 2018</h3>
          <h4><a href="https://www.google.com/maps/place/1100+Old+Bethlehem+Rd,+Perkasie,+PA+18944/@40.4273354,-75.2577536,17z/data=!3m1!4b1!4m5!3m4!1s0x89c4195c720c634b:0xf2b218cb1e967492!8m2!3d40.4273313!4d-75.2555649" target="_new">The Lake House Inn</a></h4>
          <h4>Perkasie, PA</h4>
          <p>The Lake House Inn backs up to Lake Nockamixon, a beautiful state-protected park. The ceremony, reception, and after-party (because you KNOW we're having an after-party) will be held on the property. The entire inn will be ours to celebrate in!</p>
          <img src="./images/lhi.jpg" width="609"/>

          <br/><br/>

          <h2>Please hold off on booking accomodations just yet</h2>
          <p>We're very close to finalizing a hotel block and transportation plan, and the weekend will run much more smoothly if we can consolidate where people are staying. We appreciate your patience while we work out these details over the next 1-2 weeks. In the mean time, you can email us at <a href="mailto:thekwandys@gmail.com">thekwandys@gmail.com</a> with any questions.</p>
        
          <h2>Did we mention there's also a BBQ on Saturday?</h2>
          <p>Our wedding is on a Friday, and we ❤️ you for taking off the extra day to celebrate with us. Many of you will be traveling from far to be with us, so it would be shame to end the fun on Friday night. So, we have decided to host a casual BBQ and day of relaxed lawn games for anyone who would like to stay and hang! These events will be held at a location just a few miles from the wedding venue.</p>

        </div>
      
        {/*<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.165626509093!2d-75.25774821975345!3d40.427331279464966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c4195c720c634b%3A0xf2b218cb1e967492!2s1100+Old+Bethlehem+Rd%2C+Perkasie%2C+PA+18944!5e0!3m2!1sen!2sus!4v1519530001854" title='map' width="80%" height="400" frameBorder="0" allowFullScreen></iframe>
        </div>*/}

        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <img src={this.state.mypics[this.state.pic1]} alt="gallery" className="galleryItem partyPhoto" />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <img src={this.state.mypics[this.state.pic2]} alt="gallery" className="galleryItem partyPhoto" />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <img src={this.state.mypics[this.state.pic3]} alt="gallery" className="galleryItem partyPhoto" />
        </div>
      </div>
    );
  }
}
