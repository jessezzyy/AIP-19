 import axios from 'axios';

 function Signout(){
          axios.post('/home/logout', {
            user: ''
          })
          .then(function (response)  {
              window.alert("Log out sucessfully");
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    export default Signout;
    