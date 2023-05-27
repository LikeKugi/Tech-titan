import {createSlice} from "@reduxjs/toolkit";

const initialStateChunk = {
  id: 0,
  date: new Date().toLocaleDateString('fr-CA'),
  header: '',
  body: '',
  photo: '',
};

const initialState = {newsList: [initialStateChunk]};


const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    pushNews: (state, action) => {
      const nextNews = {
        id: action.payload.id,
        date: action.payload.date,
        header: action.payload.header,
        body: action.payload.body,
        photo: action.payload.photo,
      }
      state.newsList = [...state.newsList, nextNews];
    },
    removeNews: (state, action) => {
      const removing = action.payload.id;
      state.newsList = state.newsList.filter(news => news.id !== removing);
    },
    editNews: (state, action) => {
      const editingNews = {
        id: action.payload.id,
        date: action.payload.date,
        header: action.payload.header,
        body: action.payload.body,
        photo: action.payload.photo,
      };
      state.newsList = state.newsList.map(el => el.id === editingNews.id ? editingNews : el);
    }
  }
})

export const {pushNews, removeNews, editNews} = newsSlice.actions;
export default newsSlice.reducer;