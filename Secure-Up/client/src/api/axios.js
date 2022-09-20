import axios from "axios";

const baseURL = "https://secure-up-server.herokuapp.com";

const send = async (requestType, path, token, data) => {
   
    const options = {
      method: requestType,
      url: baseURL + path,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: data,
    };                

    return await axios(options);
}

export default send;