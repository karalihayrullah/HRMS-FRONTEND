import axios from "axios";

export default class ImageService {

    upload(userId,file) {
        return axios.post(`http://localhost:8080/api/images/upload?userId=${userId}`,file)
    }

}