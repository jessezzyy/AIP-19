import axios from 'axios';

function getAllimage(){
      axios.post('/getAllImg',{
        content: " "
      })
        .then(function (response)  {
          return response.data
        })
        .catch(function (error) {
          console.log(error);
        });
    }

export default getAllimage;
