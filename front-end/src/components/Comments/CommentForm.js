import React, { useState } from 'react';
import { createComment, generatePresigned } from '../../utils/api';
import { showErrorModal } from '../../ui/error';
import '../../styles/Comments.css';

function CommentForm({ postId, setComments, parentComment}) {
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState('');
    const [homepage, setHomepage] = useState('');
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
        const validTextType = 'text/plain';
    
        if (!selectedFile) {
            return;
        }
    
        if (validImageTypes.includes(selectedFile.type)) {
            const img = new Image();
            img.onload = () => {
                if (img.width > 320 || img.height > 240) {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    
                    const ratio = Math.min(320 / img.width, 240 / img.height);
                    canvas.width = img.width * ratio;
                    canvas.height = img.height * ratio;
                    
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    
                    setFilePreview(canvas.toDataURL(selectedFile.type));
                    setFile(dataURLtoFile(canvas.toDataURL(selectedFile.type), selectedFile.name));
                } else {
                    setFile(selectedFile);
                    setFilePreview(URL.createObjectURL(selectedFile));
                }
            };
            img.src = URL.createObjectURL(selectedFile);
        } else if (selectedFile.type === validTextType) {
            if (selectedFile.size <= 100 * 1024) { 
                setFile(selectedFile);
                setFilePreview(URL.createObjectURL(selectedFile));
            } else {
                alert('Text file should not be larger than 100 KB.');
            }
        } else {
            alert('Please upload a valid image (JPG, GIF, PNG) or a text file.');
        }
    };


    const dataURLtoFile = (dataURL, filename) => {
        const arr = dataURL.split(','), mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        while(n--) u8arr[n] = bstr.charCodeAt(n);
        return new File([u8arr], filename, { type: mime });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            let newCommentBody = {text, parentComment};

            if (homepage) {
                newCommentBody.homepage = homepage;
            }

            if (file) {
                const { fileName, url } = await generatePresigned({ mimetype: file.type, extension: file.name.split('.').pop() });
                await fetch(url, {
                    method: 'PUT',
                    body: file,
                });
                newCommentBody.photo = fileName;
                console.log(fileName)
            }
            const newComment = await createComment(postId, newCommentBody);

            setComments(prev => {
                const findAndAddComment = (comments, parentId, newComment) => {
                    for (let comment of comments) {
                        if (comment.id === parentId) {
                            comment.children.push(newComment);
                            return true;
                        }
                        if (comment.children && findAndAddComment(comment.children, parentId, newComment)) {
                            return true;
                        }
                    }
                    return false;
                };
                if (parentComment) {
                    if (!findAndAddComment(prev, parentComment, newComment)) {
                        console.error(`Parent comment with id ${parentComment} not found`);
                    }
                    return prev;
                } else {
                    return [...prev, newComment];
                }
            });
        } catch (error) {
            showErrorModal(error.response?.data?.exception?.message || 'An unexpected error occurred');
        }
        
    };

    return (
        <form onSubmit={handleSubmit} className="comment-form">
            {parentComment && <a>Replying to comment ID: {parentComment}</a>}
            <textarea
                placeholder="Add a comment..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <input type="file" accept="image/*,.txt" onChange={handleFileChange} />
            {filePreview && <img src={filePreview} alt="File preview" style={{ maxWidth: '100px' }} />}
            <input
                type="text"
                placeholder="Homepage URL (optional)"
                value={homepage}
                onChange={(e) => setHomepage(e.target.value)}
            />
            <button type="submit">Post Comment</button>
        </form>
    );
}

export default CommentForm;
