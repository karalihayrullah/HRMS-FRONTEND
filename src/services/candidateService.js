import axios from "axios";

export default class candidateService {

    add(candidate){
        return axios.post("http://localhost:8080/api/candidates/add",candidate)
    }

    update(values) {
        return axios.put("http://localhost:8080/api/candidates/update", values);
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/candidates/getById?id=${id}`);
    }

    getAll(){
        return axios.get("http://localhost:8080/api/candidates/getAll")
    }

    login(user){
        return axios.post("http://localhost:8080/api/candidates/login",user)
    }

    

}