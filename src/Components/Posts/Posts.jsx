import css from './Posts.module.css'
let Posts = (props) => {
    return (
        <div className={css.postsWrapper}>
            {props.posts.map(
                post=> (
                    <div key={post.id} className={css.post}>
                        <div className={css.postHeader}>
                            <div className={css.title}>{post.title}</div>
                            <span className={css.postId}>{post.id}</span>
                        </div>                        
                        <div className={css.body}>{post.body}</div>
                    </div>
                )
            )}
        </div>
    )
}

export default Posts;