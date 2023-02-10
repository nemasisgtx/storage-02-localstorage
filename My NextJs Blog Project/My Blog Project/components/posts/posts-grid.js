import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {/* Map Function not working without a conditional statement*/}
      {posts?.map((post) => { 
        return <PostItem key={post.slug} post={post} />;
      {/* Map Function now working after adding return statement */}
        
      })}
    </ul>
  );
}

export default PostsGrid;
