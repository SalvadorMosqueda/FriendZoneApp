const SERVER_IP= '192.168.100.15:3977'


export const ENV = {
    SERVER_IP:SERVER_IP,
    BASE_PATH: `http://${SERVER_IP}/`,
    API_URL: `http://${SERVER_IP}/api`,
    SOCKET_URL: `http://${SERVER_IP}/`,
    ENDPOINTS: {
        AUTH: {
            LOGIN: `/auth/login`,
            REGISTER: `/auth/register`,
            LOGOUT: `/auth/logout`,
            UPDATE_USER: `/auth/update-user`,
            UPLOAD_AVATAR: `/auth/upload-avatar`,
            GET_AVATAR: `/auth/get-avatar`,
            GET_USER: `/auth/get-user`,
            GET_USERS: `/auth/get-users`,
            GET_USER_BY_ID: `/auth/get-user-by-id`, 
        },
    }
}