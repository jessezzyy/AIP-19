import axios from 'axios';

function getAllimage(){
   var list = [];
    axios.post('/getAllImg',{
      content: " "
    })
    .then(function (response)  {
        console.log(response.data);
        list = copyArr(arr);
    })
    .catch(function (error) {
      console.log(error);
    });
return list;
  }

  function copyArr(arr) {
	let res = []
	for (let i = 0; i < arr.length; i++) {
	 res.push(arr[i])
	}
	return res
}


  export default getAllimage;