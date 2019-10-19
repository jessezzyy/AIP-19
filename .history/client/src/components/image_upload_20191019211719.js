
 function handleBeforeUpload(file) {
      const IMAGE_MAX_SIZE = 1024 * 1024;  // Max size of image 
      if (file) {
        const sizeOk = file.size < IMAGE_MAX_SIZE;  // size is smaller than Max size
        const typeReg = new RegExp(/^image\/jpg|jpeg|png$/, 'i'); // limit image format
        const typeOk = typeReg.test(file.type); 
      
        if (!typeOk) {
         window.alert('Only accept jpg or png');
        } else if (!sizeOk) {
         window.alert('Maxsize is 1024 x 1024');
        }
  
        return sizeOk && typeOk;
      }
    }

    export default {handleBeforeUpload}

