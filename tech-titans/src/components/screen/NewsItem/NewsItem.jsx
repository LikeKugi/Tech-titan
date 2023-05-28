import './NewsItem.css';
const NewsItem = (props) => {
  const {date, header, body, photo} = props.news

  return (
      <div className='news-item'>
        <div className="news-item__date">{date}</div>
        <div className="news-item__photo">
          <img src={photo}
               alt={header}/>
        </div>
        <div className="news-item__content">
          <h3 className="news-item__title">{header}</h3>
          <p className="news-item__text">{body}</p>
        </div>
      </div>
  );
}
export default NewsItem;