
import axios from "axios";

export const getHTTP = async (params) => {
    let data;
    await axios.get(params).then(
        (response) => {
            data = response.data;
        }
    ).catch(error => {
        console.log(error);
        data = undefined;
    });
    return data;
};