
import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  timeout: 3000
});

/*const setAuthHeader = (req) => {
  const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');

  if (token) {
    return { headers: {'authorization': `Bearer ${token}`}};
  }

  return undefined;
}*/

const rejectPromise = (resError) => {
  let error = {};

  if (resError && resError.response && resError.response.data) {
    error = resError.response.data;
  } else {
    error = resError;
  }

  return Promise.reject(error);
}


// ------------ USER ACTIONS --------------

export const getUsers = async () => {
  return await axiosInstance.get('/users').then(response => response.data);
}


export const getUserById = async (id) => {
  return await axiosInstance.get(`/users/${id}`).then(response => response.data);
}

export const createUser = async (userData) => {
  //return await axiosInstance.post('/users', userData, setAuthHeader())
  return await axiosInstance.post('/users', userData)
    .then(response => response.data)
    .catch(error => rejectPromise(error))
}

export const updateUser = async (userData) => {
  //return await axiosInstance.patch(`/portfolios/${portfolioData._id}`, portfolioData, setAuthHeader())
  return await axiosInstance.patch(`/users/${userData._id}`, userData)
    .then(response => response.data)
    .catch(error => rejectPromise(error))
}

export const deleteUser = (userId) => {
  //return axiosInstance.delete(`/users/${userId}`, setAuthHeader()).then(response => response.data);
  return axiosInstance.delete(`/users/${userId}`).then(response => response.data);
}

// ------------ MOVIE AND CATEGORY ACTIONS --------------

const MOVIE_DATA = []

const CATEGORY_DATA = [
  {id: 'c-0', name: 'all'},
  {id: 'c-1', name: 'drama'},
  {id: 'c-2', name: 'action'},
  {id: 'c-3', name: 'adventure'},
  {id: 'c-4', name: 'historical'},
]

// 1. getCategories function
// 2. get categories in index page
// 3. provide categories to sidemenu
// 4. in sidemenu iterate categories and display them

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA)
      // reject('Cannot fetch data!')
    }, 50)
  })
}

export const getMovies = () => {
  return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data)
}

export const createMovie = (movie) => {
  movie.id = Math.random().toString(36).substr(2, 5)
  return axios.post(`${BASE_URL}/api/v1/movies`, movie).then(res => res.data)
}

export const getMovieById = (id) => {
  return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
}

export const updateMovie = (movie) => {
  return axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
    .then(res => res.data)
}

export const deleteMovie = (id) => {
  return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
}



export const getPosts = () => {
  return axios.get(`${BASE_URL}/api/v1/posts`).then(res => res.data)
}





















