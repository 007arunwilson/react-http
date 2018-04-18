import axios from 'axios';

const instance = axios.create();

instance.defaults.headers.common['authorization'] = 'AUTH TOKEN INSTANCE';

instance.interceptors.request.use(request=>{
    console.log(request);
    return request;
});


export default instance;


