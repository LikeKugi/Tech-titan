import NewsService from "../src/services/news.service";

const testNews = {
  date: new Date().toLocaleDateString('fr-CA'),
  header: 'Новости крутятся',
  body: 'Из зоопарка сбежала обезьяна и начала фронтендить',
  photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.life.ru%2Fposts%2F2017%2F11%2F1059141%2F9e114d2ce1e7faf755c4c8e8e4b92ec2.jpg&f=1&nofb=1&ipt=8c7f2a8d1525c0b802e58fed3257d4f7197e46f5827cad4c3d9b8f9f4f12ffb2&ipo=images',
}

const response = await NewsService.postNews(testNews);
console.log(response);