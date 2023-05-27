import axios from "axios";

const news = [{"id":1,"date":"2023-12-25","header":"Новость один","body":"из зоопарка сбежал носорог","photo":"https://oir.mobi/uploads/posts/2019-12/1575848872_9-11.jpg"},{"id":2,"date":"2023-12-25","header":"Новость два","body":"из зоопарка сбежал гепард","photo":"https://lookw.ru/15/1529/1638501144-1012-www.lookw.ru.jpg"}]

const NewsService = {
  async getSimpleNews() {
    try {
      const response = await axios.get('http://188.72.109.179:8082/news');
      return response.data;
    } catch (e) {
      console.log(e)
      return news;
    }
  },
}

export default NewsService;