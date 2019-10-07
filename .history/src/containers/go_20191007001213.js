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

class go extends Component{
   

    render(){
        return(
            <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div claclassNamess="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>

        );
    }
       
}

export default go

