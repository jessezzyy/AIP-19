import axios from 'axios';

function getAllimage(){
   var list = [];
    axios.post('/getAllImg',{
      content: " "
    })
    .then(function (response)  {
        console.log(response.data);
        list[0] = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
return list;
  }

  export default getAllimage;