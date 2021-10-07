import * as api from '../api/index.js';
import * as actionType from '../constants/actionTypes';
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNews();

    dispatch({ type: actionType.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createNewsPost = (newsPost) => async (dispatch) => {
  try {
    const { data } = await api.createNews(newsPost);

    dispatch({ type: actionType.CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateNewsPost = (id, newsPost) => async (dispatch) => {
  try {
    const { data } = await api.updateNews(id, newsPost);

    dispatch({ type: actionType.UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNewsPost = (id) => async (dispatch) => {
  try {
    await api.deleteNews(id);

    dispatch({ type: actionType.DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
}


export const likeNewsPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeNews(id);

    dispatch({ type: actionType.LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};