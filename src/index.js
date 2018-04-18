import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

const interceptorInstance = axios.interceptors.request.use(request=>{
                                
                                console.log('request data from axios intetrceptor',request);
                                return request;

                            },error=>{

                                console.log('request error from axios interceptor');
                                return Promise.reject(error);

                            });

axios.interceptors.request.eject(interceptorInstance);

axios.interceptors.response.use(response=>{
    
    console.log('response data from axios intetrceptor',response);
    return response;

},error=>{

    console.log('response error from axios interceptor',error);
    return Promise.reject(error);

})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
