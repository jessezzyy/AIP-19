/*<div class="show">
<div class="photo">
<Image   rounded src={require('../img/zx.jpeg')}/>
</div>
<div class="intro">
  <Link to="/Comment/" style={{color:'black'}}>
      <div class="introa">Reply</div>
  </Link>
  <Link to="/Praise/" style={{color:'black'}}>
  <div class="introa">Praise</div>
  </Link>
  </div>

</div>

<div class="show">
<div class="photo">
<Image   rounded src={require('../img/zc.jpeg')}/>
</div>
<div class="intro">
  <Link to="/Comment/" style={{color:'black'}}>
      <div class="introa">Reply</div>
  </Link>
  <Link to="/Praise/" style={{color:'black'}}>
  <div class="introa">Praise</div>
  </Link>
  </div>

</div>

<div class="show">
<div class="photo">
<Image   rounded src={require('../img/ww.jpeg')}/>
</div>
<div class="intro">
  <Link to="/Comment/" style={{color:'black'}}>
      <div class="introa">Reply</div>
  </Link>
  <Link to="/Praise/" style={{color:'black'}}>
  <div class="introa">Praise</div>
  </Link>
  </div>

</div>

<div class="show">
<div class="photo">
<Image   rounded src={require('../img/qq.jpeg')}/>
</div>
<div class="intro">
  <Link to="/Comment/" style={{color:'black'}}>
      <div class="introa">Reply</div>
  </Link>
  <Link to="/Praise/" style={{color:'black'}}>
  <div class="introa">Praise</div>
  </Link>
  </div>

</div>

<div class="show">
<div class="photo">
<Image   rounded src={require('../img/ss.jpeg')}/>
</div>
<div class="intro">
  <Link to="/Comment/" style={{color:'black'}}>
      <div class="introa">Reply</div>
  </Link>
  <Link to="/Praise/" style={{color:'black'}}>
  <div class="introa">Praise</div>
  </Link>
  </div>

</div>

<div>
<img style={{ width: '50%',  height: '50%' }} src={this.state.imgSrc} />
</div>*/

import React,{Component,Fragment} from 'react';

class go extends Component{
   

    render(){
        return(
            <div>
            <button id="myBtn">Open Modal</button>
     

<div id="myModal" class="modal">

 
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div>
</div>

        );
    }
       
}

export default go

