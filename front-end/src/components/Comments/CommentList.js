import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';
import { getComments } from '../../utils/api';
import WebSocketProvider from '../../WebSocketProvider';
import '../../styles/Comments.css';

function CommentList() {
    const { postId } = useParams();
    const [comments, setComments] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(25);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function fetchComments() {
            const data = await getComments(postId, offset);
            setComments(() => [...data.comments]);
            setHasMore(data.hasMore);
        }
        fetchComments();
    }, []);

    const loadMoreComments = () => {
        if (hasMore) {
            setOffset(prev => prev + limit);
        }
    };

    const handleCommentSubmitted = () => {
        setOffset(0);
        setComments([]); 
    };

    return (
        <div className="comments-container">
            <WebSocketProvider postId={postId} setComments={setComments}>
                <h2>Comments</h2>
                <CommentForm postId={postId} setComments={setComments} onCommentSubmitted={handleCommentSubmitted} />
                <div className="comment-list">
                    {comments.map((comment) => (
                        <CommentItem key={comment.id} comment={comment} setComments={setComments} />
                    ))}
                </div>
                {hasMore && <button onClick={loadMoreComments}>Load More</button>}
            </WebSocketProvider>
        </div>
    );
}

export default CommentList;
