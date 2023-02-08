// our-domain.com/new-news
import NewNewsForm from "../../components/newsData/NewNewsForm";

const AddNewNews = () => {
  const addNewsHandler = (enteredNewsData) => {
    console.log(enteredNewsData);
  };
  return (
      <NewNewsForm onAddNews={addNewsHandler} />
  )
};

export default AddNewNews;
