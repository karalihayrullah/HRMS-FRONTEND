import axios from "axios";

export default class JobPostingService {

    add(values) {
        return axios.post("http://localhost:8080/api/jobPostings/add", values)
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/jobPostings/getById?id=${id}`);
    }
    
    getAll(){
        return axios.get("http://localhost:8080/api/jobPostings/getAll");
    }

    getAllSortedByPostingDateTop6() {
        return axios.get("http://localhost:8080/api/jobPostings/getAllSortedByPostingDateTop6");
    }

    getAllByEmployerIdSortedByPostingDate(employerId) {
        return axios.get(`http://localhost:8080/api/jobPostings/getAllByEmployerIdSortedByPostingDate?employerId=${employerId}`);
    }

    getAllFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType(cityId, jobTitleId, workingTimeId, workingTypeId) {
        return axios.get(`http://localhost:8080/api/jobPostings/getAllFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType?cityId=${cityId}&jobTitleId=${jobTitleId}&workingTimeId=${workingTimeId}&workingTypeId=${workingTypeId}`);
    }

    getAllByPageFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType(cityId, jobTitleId, workingTimeId, workingTypeId, pageNo, pageSize) {
        return axios.get(`http://localhost:8080/api/jobPostings/getAllByPageFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType?cityId=${cityId}&jobTitleId=${jobTitleId}&pageNo=${pageNo}&pageSize=${pageSize}&workingTimeId=${workingTimeId}&workingTypeId=${workingTypeId}`);
    }



}