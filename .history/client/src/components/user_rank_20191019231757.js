 // request to get all users' information
 import axios from 'axios';

   function getList(){
     var list = [];
      axios.post('/getList', {
        list: []
      })
      .then(function (response)  {
        console.log(response.data);
         for (let i = 0; i < response.data.length; i++) {
	     list.push(response.data[i])
	}
        
      })
      .catch(function (error) {
        console.log(error);
      });
      return list;       
    }
      export default getList;