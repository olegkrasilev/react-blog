const userEndpoint = 'http://localhost:3000/api/v1/users';

const postsEndpoint = 'http://localhost:3000/api/v1/posts';

export const loginEndpoint = `${userEndpoint}/login`;

export const signUpEndpoint = `${userEndpoint}/signup`;

export const logoutEndpoint = `${userEndpoint}/logout`;

export const allPostsEndpoint = `${postsEndpoint}/getAllPosts`;
