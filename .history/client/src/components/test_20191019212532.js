import axios from 'axios';

function getAllimage(){
    axios.post('/getAllImg',{
      content: " "
    })
    .then(function (response)  {
        console.log(response.data);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  export default getAllimage;