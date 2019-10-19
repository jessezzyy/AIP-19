// read all discussion images from database
import axios from 'axios';

function getAllimage(){
   var list = [];
    axios.post('/getAllImg',{
      content: " "
    })
    .then(function (response)  {
        for (let i = 0; i < response.data.length; i++) {
	     list.push(response.data[i])
	}
    })
    .catch(function (error) {
      console.log(error);
    });
return list;
}
  export default getAllimage;