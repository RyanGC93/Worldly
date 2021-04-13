import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getSignedRequest } from '../../services/upload'
import { createPost, editPost, deletePost } from '../../Store/posts'
import './PostForm.css'


function PostForm({ edit, post, setShowModal }) {
  const history = useHistory()
  const dispatch = useDispatch()
  const [src, setSrc] = useState('')
  const [photo, setPhoto] = useState('')
  const [description, setDescription] = useState('')
  const [isPrivate] = useState(false)
  const user = useSelector(state => state.session.user)
  let userId
  if (user) {
    userId = user.id;
  }
  useEffect(() => {
    if (post) {
      setDescription(post.description)
      setSrc(post.imagePath)
    }
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (edit) {
      await dispatch(editPost(post.id, description, isPrivate));
    } else {
      const url = await getSignedRequest(photo);
      await dispatch(createPost({userId, description, url, isPrivate }));
    }
    setShowModal(false)
    history.push(`/profile/${userId}`);
  };
  const readUrl = (e) => {
    if (e.target.files[0]){
      const src = URL.createObjectURL(e.target.files[0])
      setSrc(src)
      setPhoto(e.target.files[0])
    }
  }
  const removePost = async (e) => {
    await dispatch(deletePost(post.id));
  };

  const closeWindow = (e) => {
    e.preventDefault()
    setShowModal(false);
  }
  return (
    <div className="postform__container">
      <div className="postform__closeForm">
        <i className="fas fa-window-close" onClick={closeWindow}/>
      </div>
      <h2 className="postform__header">{edit ? "Edit Post" : "New Post"}</h2>
      <form className="postform" onSubmit={handleSubmit}>
      {src && <img className="postform__image" src={src} />}
        {!edit && (
          <div className="fileInput__container">
            <label className="postform__label fileInput__label">
              Choose a Photo
              <input
                type="file"
                className="postform__input fileInput"
                onChange={readUrl}
              />
            </label>
          </div>
        )}

        <textarea
          rows="5"
          cols="33"
          type="textarea"
          value={description}
          placeholder="Write a caption..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="postform__button-container">
          <button type="submit" className="postform__button">
            {edit ? "Edit Post" : "Share Post"}
          </button>

          {edit && (
            <a onClick={removePost} className="postform__delete">
              Delete Post
            </a>
          )}
        </div>
      </form>
    </div>
  );
}

export default PostForm;
