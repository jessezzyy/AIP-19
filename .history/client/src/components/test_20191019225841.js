import axios from 'axios';

function getAllimage(){
   var list = [1];
    axios.post('/getAllImg',{
      content: " "
    })
    .then(function (response)  {
        console.log(response.data);
        list = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
return list;
  }

  export default getAllimage;