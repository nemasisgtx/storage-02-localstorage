import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewNewsForm.module.css';

function NewNewsForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const sourceInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredSource = sourceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const NewsData = {
      title: enteredTitle,
      image: enteredImage,
      source: enteredSource,
      description: enteredDescription,
    };

    props.onAddNews(NewsData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>News Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>News Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='source'>Source</label>
          <input type='text' required id='source' ref={sourceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add News</button>
        </div>
      </form>
    </Card>
  );
}

export default NewNewsForm;
