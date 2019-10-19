import axios from 'axios';

function getAllimage(){
   var mycars=new Array()
   mycars[0]="Saab"
mycars[1]="Volvo"
    axios.post('/getAllImg',{
      content: " "
    })
    .then(function (response)  {
        console.log(response.data);
      return mycars;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  export default getAllimage;