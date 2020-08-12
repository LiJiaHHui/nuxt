import request from '@/utils/request'
export const login = data => {
    return request({
        methods: 'POST',
        url: '/api/users/login',
        // 传递请求体数据
        data
    })
}
export const register = data => {
    return request({
        methods: 'POST',
        url: '/api/users',
        // 传递请求体数据
        data
    })
}