 import axios from 'axios';

 function logout(){
          var that = this;
          axios.post('/home/logout', {
            user: []
          })
          .then(function (response)  {
            that.setState({username: ''})
              window.alert("Log out sucessfully");
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    export default getList;