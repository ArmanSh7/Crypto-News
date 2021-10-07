import * as actionType from '../constants/actionTypes';

 const reducer = (news = [], action) => {
    switch (action.type) {
      case actionType.FETCH_ALL:
        return action.payload;
      case actionType.CREATE:
        return [...news, action.payload];
      case actionType.UPDATE:
        return news.map((newsPost)=> newsPost._id===action.payload._id?action.payload:newsPost);
      case actionType.DELETE:
        return news.filter((newsPost)=> newsPost._id!==action.payload);
      case actionType.LIKE:
        return news.map((news)=> news._id===action.payload._id?action.payload:news);
      default:
        return news;
    }
  };

  export default reducer;
