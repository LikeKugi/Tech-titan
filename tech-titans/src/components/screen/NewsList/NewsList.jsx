import NewsItem from "../NewsItem/NewsItem";
import {useQuery} from "react-query";
import NewsService from "../../../services/news.service";

const NewsList = () => {
  const {data, isLoading, error} = useQuery(['news'], () => NewsService.getSimpleNews())
  if (isLoading) return <p>Загрузка...</p>
  if (error) {
    return <p>Ошибка...</p>
  }
  return (
      <>
        {data && data.map(el => < NewsItem news={el} key={el.id}/>)}
      </>
  );
}
export default NewsList;