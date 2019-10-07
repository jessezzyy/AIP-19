/*<div>
<div class="show">
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
</div>
<div>
<input
  type="file"
  id='file'
  accept="image/jpeg, image/gif, image/png, image/bmp"
  className="input-file"
  onChange={e => {
    this.onFileChange(e);
  }}
/>
<label htmlFor="file" className="ant-upload">  
{this.state.imgSrc ? imagePreview : uploadImage}
    </label>
            </div>
    
            <div>
            <Modal.Dialog
  visible={this.state.showPreviewModal}
  title="图片预览"
  footer={null}
  width={700}
  onCancel={this.handlePreviewCancel}>
  <img alt="" style={{ width: '100%' }} src={this.state.imgSrc} />
</Modal.Dialog>
</div>
*/