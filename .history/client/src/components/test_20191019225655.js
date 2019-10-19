import axios from 'axios';

function getAllimage(){
   var list = [];
    axios.post('/getAllImg',{
      content: " "
    })
    .then(function (response)  {
        console.log(response.data);
        list = response.data[1];
    })
    .catch(function (error) {
      console.log(error);
    });
return list;
  }

  export default getAllimage;