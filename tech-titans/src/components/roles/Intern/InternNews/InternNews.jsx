import {useQuery} from "react-query";
import NewsService from "../../../../services/news.service";
import {useDispatch} from "react-redux";
import NewsItem from "../../../screen/NewsItem/NewsItem";

const InternNews = (props) => {
  const dispatch = useDispatch();
  const {data, isLoading, error} = useQuery(['news'], () => NewsService.getSimpleNews())
  if (isLoading) return <p>Is loading...</p>
  if (error) {
    return <p>Is error...</p>
  }


  return (
      <section>
          <h2>News</h2>
        {data && data.map(el => < NewsItem news={el} key={el.id}/>)}
      </section>
  );
}
export default InternNews;