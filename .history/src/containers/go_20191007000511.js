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

</div>*/

import React,{Component,Fragment} from 'react';

class go extends Component{
   

    render(){
        return(
        <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <img style={{ width: '50%',  height: '50%' }} src={this.state.imgSrc} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
       );
    }
       
}

export default go

