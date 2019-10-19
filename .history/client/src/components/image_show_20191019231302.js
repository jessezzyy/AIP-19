import axios from 'axios';

function getAllimage(){
   var list = [];
    axios.post('/getAllImg',{
      content: " "
    })
    .then(function (response)  {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
	     list.push(response.data[i])
	}
        list = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
return list;
}
  export default getAllimage;