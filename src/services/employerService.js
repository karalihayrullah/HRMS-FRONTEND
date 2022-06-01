import axios from "axios";

export default class EmployerService {

    add(employer){
        return axios.post("http://localhost:8080/api/employers/add",employer)
    }

    update(values) {
        return axios.put("http://localhost:8080/api/employers/update", values);
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/employers/getById?id=${id}`);
    }

    getAll(){
        return axios.get("http://localhost:8080/api/employers/getAll")
    }

    login(user){
        return axios.post("http://localhost:8080/api/employers/login",user)
    }

}