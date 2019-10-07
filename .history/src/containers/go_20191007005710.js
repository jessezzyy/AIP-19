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

import React,{Component} from 'react';
import '../style/web.css';

class go extends Component{
   

    render(){
        return(
            <input
  type="file"
  id='file'
  accept="image/jpeg, image/gif, image/png, image/bmp"
  className="input-file"
/>

        );
    }
       
}

export default go

