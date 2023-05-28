import NewsList from "../../screen/NewsList/NewsList";
import withAuth from "../../../HOC/withAuth";

const News = () => {
  return (
      <section>
          <h2>Новости</h2>
          <NewsList />
      </section>
  );
}
export default withAuth(News);