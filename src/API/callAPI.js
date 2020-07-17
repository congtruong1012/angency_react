import Axios from "axios";

export default function callAPI(endPoint, method = 'GET', data){
    return Axios({
        url: 'http://localhost:3004/'+endPoint,
        method,
        data
    })
}