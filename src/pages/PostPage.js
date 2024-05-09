import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {postThunk} from "../store/postsSlice";

const PostPage = () => {
    const dispatch= useDispatch()
    const id= useParams()
    const {post, error, loading}=useSelector(state => state.posts)

    useEffect(() => {
        dispatch(postThunk(id))
    }, []);

    if(error){
        return <p>Произошла ошибка: {error}</p>
    }
    if(loading){
        return <p>Загрузка...</p>
    }

    return (
        <>
            {
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
            }
        </>
    );
};

export default PostPage;