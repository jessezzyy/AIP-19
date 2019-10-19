import axios from 'axios';

function getAllimage(){
    var list =[]
    axios.post('/getAllImg',{
      content: " "
    })
    .then(function (response)  {
        list = response.data
      return list;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  export default getAllimage;