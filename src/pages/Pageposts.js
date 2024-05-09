import {useEffect} from "react";
import {getPostsThunk} from "../store/postsSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


const Pageposts = () => {
    const dispatch= useDispatch()
    const {posts, loading, error}=useSelector(state => state.posts)

    useEffect(() => {
        dispatch(getPostsThunk())
    }, []);

    if(error){
        return <p>Произошла ошибка: {error}</p>
    }
    if(loading){
        return <p>Загрузка...</p>
    }

    return (
        <div>
            {
                    posts?.map((items)=>(
                        <Link to={`/post/${items.id}`}  key={items.id}><div>{items.title}</div></Link>
                    ))
            }
        </div>
    );
};

export default Pageposts;