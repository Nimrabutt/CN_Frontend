import { extendObservable} from 'mobx'

class userStore {
    constructor(){
        extendObservable(this, {
            loading: true,
            isLoggedIn: false,
            username:''
        })
    }
}
export default new userStore();