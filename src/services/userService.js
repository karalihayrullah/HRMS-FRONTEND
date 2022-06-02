import axios from "axios";

export default class UserService  {
  
    getByEmail(email){
        return axios.get(`http://localhost:8080/api/users/getByEmail=${email}`)
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/users/getById?id=${id}`);
    }
    login(user){
        return axios.post("http://localhost:8080/api/users/login",user)
    }
}
