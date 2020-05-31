import axios from 'axios';
import Is from '@flk/supportive-is';
import User from './component/User';

export let http = axios.create({
    baseURL:'https://apps.mentoor.io/shera2/api/admin/',
    transformRequest: [function (data) {
        if (Is.formElement(data)) {
            return new FormData(data);
        }

        return data;
    }],
});

http.interceptors.request.use(requestConfig => { 
    console.log(User.userData, User.isLoggedIn());
    
  //  console.log(`CACHE${userData}`) ;
  let auth = User.isLoggedIn() ? `Bearer ${User.getAccessToken()}` : 'key SP6YHG56IKLO90MNF4TGAQW23FVBG765';
    //   let auth =  'key SP6YHG56IKLO90MNF4TGAQW23FVBG765';

    requestConfig.headers.Authorization = auth;
    return requestConfig;
});
