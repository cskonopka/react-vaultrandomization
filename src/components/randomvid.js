import React from 'react';
import '../css/App.css'
import vault from './cskonopka-vault.csv';
import testJSON from './cskonopka-vault.json'
import {Button, Row, Col, Grid, Image, ResponsiveEmbed} from 'react-bootstrap'

import VideoPlayer from './videoplayer';
import logo from '../img/csk.jpg'


var style={
	width: '100%',
  	position: "relative",
  	margin: "auto",
  	top: "0",
  	right: "0",
  	bottom: "0",
  	left: "0",
  	width: "20%",
  	height: "20%"
};

var styleButton={
'width':'640px', 
'backgroundColor':'plum',
'borderColor':'plum',
'color':'black' 
};


var vimeoStyle={
'width':'50%'
};

	var stringitDefault = "http://player.vimeo.com/video/229664961?loop=1";

export default class RandomVid extends React.Component {
  constructor(props) {
    super(props);
    this.state        = { name: '', name2: stringitDefault } ;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

  	var jsonLength = testJSON.length;
  	console.log(jsonLength);
	var newRandom = (Math.random()*jsonLength);
	var rounder = Math.round(newRandom); 	

  	// console.log(testJSON[rounder]['Video ID']);

	var stringit = "http://www.vimeo.com/" + testJSON[rounder]['Video ID'] + ""; 
	var stringit2 = "http://player.vimeo.com/video/" + testJSON[rounder]['Video ID'] + "?loop=1"; 
	
    this.setState({ name: stringit, name2: stringit2 });
  }


  render() {
    return (
    	<div>

      <div style={{textAlign:"center"}} >

      	<br/>
        <Grid>
        <Row>
        <Col xs={12} md={12}>
      	<Image style={style} responsive responsive src={logo} />
        </Col>
        </Row>
        </Grid>

      	<br/>
                <Col xs={12} md={12}>
        <Button style={styleButton} onClick={ this.handleChange }>random video</Button> 
        </Col>
        <br/>
        <br/>
                <Col xs={12} md={12}>
        <VideoPlayer style={vimeoStyle} headerProp2 = {this.state.name2}/>
        </Col>
      </div>
      </div>
    );
  }
}

// export default RandomVid;

// import React from 'react';
// import '../css/App.css'
// import Papa from 'papaparse';
// import file from './cskonopka-vault.csv';

// // import Download from './components/Download';
// // import Link from './components/Link';
// import {CSVLink} from 'react-csv';
// import VideoPlayer from './videoplayer';
// // export const CSVDownload = Download;
// // export const CSVLink = Link;


// var linkHolder = new Array;
// var obj = new Object();
// var myObject = {};
// myObject.results = [];
// myObject.names=[];
// var globalSelector;


// class RandomVid extends React.Component {
//   constructor(props) {
//     super(this.props);
//     this.state = {
//       clicks: 0,
//       show: true
//     };
//   }
	
// 	  IncrementItem(){
//     this.setState({ clicks: this.state.clicks + 1 });
//   }
//   DecreaseItem() {
//     this.setState({ clicks: this.state.clicks - 1 });
//   }
//   ToggleClick (){
//     this.setState({ show: !this.state.show });
//   }
// 			myClick() {

// 		// var newRandom = (Math.random()*10);
// 		// var rounder = Math.round(newRandom);
// 		// console.log(rounder);

	
// 		}

//    render() {
//       return (
//       <div>
//         <button onClick={this.IncrementItem}>Click to increment by 1</button>
//         <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
//         <button onClick={this.ToggleClick}>
//           { this.state.show ? 'Hide number' : 'Show number' }
//         </button>
//         { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
//       </div>
//       );
//    }
// }

// export default RandomVid;


 
//             // <VideoPlayer headerProp={this.state.number}/>
//             // <p>{this.state.count}</p>
//             // <h1>{this.props.headerProp}</h1>