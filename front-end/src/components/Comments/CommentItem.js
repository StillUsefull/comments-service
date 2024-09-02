import React, { useState } from 'react';
import CommentForm from './CommentForm';
import { updateComment } from '../../utils/api';
import { getWsId } from '../../utils/auth';
import '../../styles/Comments.css';

function CommentItem({ comment, setComments }) {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(comment.text);

    const handleReplyToggle = () => {
        setShowReplyForm(!showReplyForm);
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const updatedComment = await updateComment(comment.id, { text: editText });
        setComments(prev => prev.map(c => (c.id === comment.id ? updatedComment : c)));
        setIsEditing(false);
    };

    const currentUserId = getWsId();

    return (
        <div className="comment-item">
            <div className="comment-header">
                <img src="" alt={`${comment.username}'s avatar`} />
                <div className="comment-author">{comment.username}</div>
                {comment.homepage ? <div className="home-page"><a href={comment.homepage}>Homepage</a></div> : <></>}
                <div className="comment-time">{new Date(comment.createdAt).toLocaleString()}</div>
                {comment.updatedAt && comment.updatedAt !== comment.createdAt && (
                    <div className="comment-updated">(Edited)</div>
                )}
                <div className="comment-actions">
                    <span onClick={handleReplyToggle}>Reply</span>
                    {comment.userId === currentUserId && (
                        <span onClick={handleEditToggle}>{isEditing ? 'Cancel' : 'Edit'}</span>
                    )}
                </div>
            </div>
            <div className="comment-body">
                {isEditing ? (
                    <form onSubmit={handleEditSubmit} className="edit-form">
                        <textarea
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            required
                        />
                        <div className="edit-form-actions">
                            <button type="submit">Update Comment</button>
                            <button type="button" onClick={handleEditToggle} className="close-button">Close</button>
                        </div>
                    </form>
                ) : (
                    <p>{comment.text}</p>
                )}
                {comment.photo && <img src={comment.photo} alt="Comment attachment" />}
            </div>
            {showReplyForm && <CommentForm postId={comment.postId} setComments={setComments} parentComment={comment.id}/>}
            {comment.children && comment.children.length > 0 && (
                <div className="nested-comments">
                    {comment.children.map((child) => (
                        <CommentItem key={child.id} comment={child} setComments={setComments} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default CommentItem;
