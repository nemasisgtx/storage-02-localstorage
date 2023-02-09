import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

function PostsGrid(props) {
  const { dummy } = props;

  return (
    <ul className={classes.grid}>       
    {/* Map Function not working */}
      {dummy.map((post) => {
        <PostItem key={post.slug} post={post} />;
      })}
    </ul>
  );
}

export default PostsGrid;
