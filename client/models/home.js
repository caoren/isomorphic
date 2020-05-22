import axios from 'axios';

const initState = {
    request: false,
    data: undefined,
    err: ''
};
const home = {
    state: initState,
    epics: {
        fetch(payload, dispatch) {
            const { response } = payload || {};
            const host = response ? response.host : '';
            return axios({
                method: 'get',
                url: `${host}/api/gethome`
            }).then((res) => {
                const resData = res.data;
                const { data } = resData;
                // this.succ(data);
                dispatch('home/succ', data);
            }).catch(() => {
                this.fail({
                    msg: '网络请求失败，请稍后重试'
                });
            });
        }
    },
    reducers: {
        requesting(state, payload) {
            return {
                request: true,
                err: ''
            };
        },
        succ(state, payload) {
            return {
                request: false,
                err: '',
                data: payload
            };
        },
        fail(state, payload) {
            return {
                request: false,
                err: payload.msg
            };
        }
    }
};

export default home;