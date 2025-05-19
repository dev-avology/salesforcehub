import React, { useEffect, useRef, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";
import CommonDrop from "../Dropdown/CommonDrop";
import API from '../../services/api'
import EmojiPicker from 'emoji-picker-react';
import { Api } from "@mui/icons-material";
import Login from '../Login';


function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="custom-model log ">
      <div className="modal-overlay">
        <div className="modal">{children}</div>
      </div>
    </div>
  );
}

function ChatBox({ postID }) {
  const [comments,setComments]=useState([])
  const [commentsRefresh, setCommentsRefresh] = useState(false);

   const handleRefresh = () => {
    setCommentsRefresh(prevState => !prevState);
  };

useEffect(() => {
    const fetchComments = async () => {
      try {
       
        const res = await API.get(`/api/comments?filters[blog][documentId][$eq]=${postID}&populate[user]=true&populate[likes]=true&populate[CommentImage]=true&populate[replies][populate][Rimg]=true&populate[replies][populate][user]=true&populate[replies][populate][likes]=true`);
        
        setComments(res.data.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    if (postID) {
      fetchComments();
    }
  }, [postID,commentsRefresh]);


  const { Authuser, isAuthenticated } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newComments, setNewComments] = useState('');
  const [newReply, setNewReply] = useState('');
  const [commentID, setCommentID] = useState(null);
  const [loadcomment, setLoadcomment] = useState(3);
  const [filter, setFilter] = useState("Newest");
  const [filteredComments, setFilteredComments] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [showPickerreply, setShowPickerreply] = useState(false);
  const [valueiD, setValueiD] = useState(null);
  const [file, setFile] = useState(null);
  const [rfile, setRfile] = useState(null);
  const [inputKey, setInputKey] = useState(Date.now());
  const fileInputRef = useRef(null);
  const textareaRef = useRef(null);


  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (comments.length > 0) {
      sortComments(filter);
    }
  }, [comments, filter]);


  const handleLikes = async (commentId) => {

    if (!isAuthenticated) return openModal();

    // try {
    const response = await API.get(
      `http://localhost:3002/api/likes?filters[user][$eq]=${Authuser.id}&populate[comment]=true`
    );

    const likes = response.data?.data;

    const hasLiked = likes.find((val) => val.comment?.documentId === commentId);

    if (hasLiked) {
      const response = await API.delete(
        `http://localhost:3002/api/likes/${hasLiked.documentId}`
      );
      handleRefresh();


    } else {
      const likePayload = {
        data: {
          comment: commentId,
          user: Authuser.id,
        },
      };

      await API.post('/api/likes', likePayload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      handleRefresh();
      console.log('Like added');
    }
    // } catch (error) {
    //   console.error('Error handling like:', error);
    // }
  };

  //handle share
  const handleShare = (commentId) => {
    const shareUrl = `${window.location.origin}/blog`;

    if (navigator.share) {
      navigator.share({
        title: 'Check out this comment',
        text: 'Take a look at this comment!',
        url: shareUrl,
      }).then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      navigator.clipboard.writeText(shareUrl)
        .then(() => alert('Link copied to clipboard!'))
        .catch((err) => console.error('Failed to copy:', err));
    }
  };


  //handle reply like
  const handleReplyLikes = async (commentId) => {

    if (!isAuthenticated) return openModal();

    // try {
    const response = await API.get(
      `http://localhost:3002/api/likes?filters[user][$eq]=${Authuser.id}&populate[reply]=true`
    );

    const likes = response.data?.data;


    const hasLiked = likes.find((val) => val.reply?.documentId === commentId);

    if (hasLiked) {

      const response = await API.delete(
        `http://localhost:3002/api/likes/${hasLiked.documentId}`
      );

      handleRefresh();
    } else {
      const likePayload = {
        data: {
          reply: commentId,
          user: Authuser.id,
        },
      };

      await API.post('/api/likes', likePayload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      handleRefresh();
      console.log('Like added');
    }
    // } catch (error) {
    //   console.error('Error handling like:', error);
    // }
  };





  //handling code format
  const handleCodeFormat = () => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = newComments.substring(start, end);

    const formatted = '`' + selectedText + '`';

    const newText =
      newComments.substring(0, start) + formatted + newComments.substring(end);

    setNewComments(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + 1, start + formatted.length - 1);
    }, 0);
  };


  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHr = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHr / 24);

    if (diffSec < 60) return `${diffSec} seconds ago`;
    if (diffMin < 60) return `${diffMin} minutes ago`;
    if (diffHr < 24) return `${diffHr} hours ago`;
    return `${diffDay} day${diffDay > 1 ? 's' : ''} ago`;
  };

  //comments section 
  const handleFileChange = (e) => {
    if (!isAuthenticated) {
      return openModal();
    }
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

  };
  const handleRemoveImage = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleEmojiClick = (emojiData) => {
    setNewComments((prev) => prev + emojiData.emoji);
    setShowPicker(false);
  };

  //replay section

  const handleFileReplyChange = (e, id) => {
    const selectedFile = e.target.files[0];
    setCommentID(id);
    setRfile(selectedFile);
  }

  const handleRemoveReImage = () => {
    setRfile(null);
    setInputKey(Date.now());
  };

  const handleEmojiClickReply = (emojiData) => {
    setNewReply((prev) => prev + emojiData.emoji);
    setShowPickerreply(false);
  };

  //...
  const handleShowPickerreply = (id) => {

    setValueiD(id);
    setCommentID(id);
    setShowPickerreply(!showPickerreply);
  }



  const handleCommentChange = (e) => setNewComments(e.target.value);

  //handle comments
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      return openModal();
    }

    try {
      let imgID = null;

      if (file) {
        const formData = new FormData();
        formData.append('files', file, file.name);
        const uploadRes = await API.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const uploadedFile = uploadRes.data[0];
        imgID = uploadedFile.id;


      }
      if (!imgID && newComments.trim() === '') {
        alert('Please enter a comment or upload an image before submitting.');
        return;
      }
      const commentPayload = {
        data: {
          Text: newComments,
          Date: new Date().toISOString(),
          blog: postID,
          CommentImage: imgID || null,
          reactions: null,
          replies: null,
          user: Authuser.id,
        },
      };
      const commentRes = await API.post('/api/comments', commentPayload);
      const createdCommentId = commentRes.data.data.id;
      imgID = null;
      handleRemoveImage();
      handleRefresh();

      // Reset the form
      setNewComments('');
    } catch (err) {
      console.error('Error submitting comment and reaction:', err.response?.data || err.message);
    }
  };


  //handle reply
  const handleReplySubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      return openModal();
    }

    let imgID = null;

    if (rfile) {
      const formData = new FormData();
      formData.append('files', rfile, rfile.name);
      const uploadRes = await API.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const uploadedFile = uploadRes.data[0];
      imgID = uploadedFile.id;
    }
    if (!imgID && newReply.trim() === '') {
      alert('Please enter a comment or upload an image before submitting.');
      return;
    }
    const replyPayload = {
      data: {
        Text: newReply,
        Date: new Date().toISOString(),
        comment: commentID,
        Rimg: imgID || null,
        user: Authuser.id,
      },
    };


    const replyRes = await API.post('/api/replies', replyPayload);
    imgID = null;
    handleRemoveReImage();
    handleRefresh();
    setCommentID(null);
    setNewReply('');
    setValueiD(null);
    const createdreplyId = replyRes.data.data.id;
  }

  //filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    sortComments(filter);
  }

  const handleReplyChange = (e, commentId) => {
    setNewReply(e.target.value);
    setCommentID(commentId);

  };




  //filter data
  const sortComments = (filter) => {
    let sortedComments = [...comments];

    switch (filter) {
      case 'Oldest':
        sortedComments.sort((a, b) => {
          const dateA = new Date(a.Date).getTime();
          const dateB = new Date(b.Date).getTime();
          return dateA - dateB; // Oldest first
        });
        break;

      case 'Newest':
        sortedComments.sort((a, b) => {
          const dateA = new Date(a.Date).getTime();
          const dateB = new Date(b.Date).getTime();
          return dateB - dateA; // Newest first
        });
        break;


      default:
        // No sorting
        break;
    }

    setFilteredComments(sortedComments);
  };




  return (
    <>
      <section className="join-detailsblog">
        <div className="join-detailsblog-bg">
          <img src="../images/join-detailsblogbg1.png" alt="join-detailsblogbg" />
        </div>
        <div className="container">
          <div className="heading">
            <p>
              <span>
                <img src="../images/messgee.svg" alt="messgee.svg" /> Join the
                discussion
              </span>
            </p>
          </div>
          <div className="box-main-container">
            <div className="box-main">
              <div className="box-flex">
                <figure>
                  <img src="../images/profilebar.png" alt="messgee.svg" />
                </figure>
              </div>
              <div className="box-content">
                <form
                  onSubmit={handleSubmit} >
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    ref={textareaRef}
                    value={newComments}
                    onChange={handleCommentChange}
                    placeholder={
                      isAuthenticated ? "Write your comment here..." : "Please log in to join the discussion..."
                    }
                    onClick={!isAuthenticated ? () => openModal() : undefined}

                  />

                  {file && (
                    <div className="imgs-uploads">
                      <img
                        src={URL.createObjectURL(file)}
                        alt="Preview"
                      />
                      <button
                        type="button"
                        onClick={handleRemoveImage}

                        title="Remove image"
                      >
                        ×
                      </button>
                    </div>
                  )}
                  <div className="emoji-flex">
                    <div className="emoji-left">
                      <label>
                        <img src="../images/emoiy1.svg" alt="emoji1" />
                        <input
                          type="file"
                          name="files"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          style={{ display: 'none' }}
                        />
                      </label>
                      <button type="button" onClick={() => setShowPicker(!showPicker)}>
                        <img src="../images/emoiy2.svg" alt="emoji2" />
                      </button>
                      <p onClick={handleCodeFormat}>
                        <img src="../images/emoiy3.svg" alt="emoji3" />
                      </p>

                    </div>
                    <div className="emoji-right">
                      <button className="primary-btn" type="submit"  >Comment</button>
                    </div>
                  </div>
                </form>
                {showPicker && (
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                )}
              </div>
            </div>

            <div className="details-comment">
              <div className="heading">
                <h3>{comments.length} comments</h3>
                <div className="dropdown-wrapper">
                  <select className="custom-select" onChange={handleFilterChange} value={filter} >
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                    <option value="Top">Top</option>
                  </select>
                  <div className="dropdown-arrow">
                    <img src="../images/drop-arrow.svg" alt="drop-arrow" />
                  </div>
                </div>
                {/* <CommonDrop
                  options={[
                    { label: "Newest", value: "newest" },
                    { label: "Oldest", value: "oldest" },
                    { label: "Top", value: "top" },
                  ]}
                  comments={comments}
                /> */}
              </div>
              <div className="doe-flex doe-flex-common" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* comments.. */}
                {filteredComments.length > 0 ?
                  (filteredComments.slice(0, loadcomment).map((comment) => (
                    <div className="doe-flex doe-flex-common" key={comment.documentId}>
                      <div className="doe-left"  >
                        <figure>
                          <img src="../images/doe.png" alt="messgee.svg" />
                        </figure>
                      </div>
                      <div className="doe-right">
                        <div className="name">
                          <h4>{comment.user?.username}</h4>
                          <span>{formatTimeAgo(comment.Date)}</span>

                        </div>
                        {comment.CommentImage ?
                          <img src={`${process.env.NEXT_PUBLIC_API_URL}${comment.CommentImage?.url}`} alt={comment.Title} />
                          : ''}
                        <p>
                          {comment.Text}
                        </p>

                        <div className="replay-sec">
                          <span>
                            <button onClick={(e) => handleLikes(comment.documentId)}>
                              <img src="../images/replay1.svg" alt="like icon" /> {comment.likes?.length} likes
                            </button>
                            <Link href="#" className="active">
                              <img src="../images/replay2.svg" alt="reply icon" />{comment.replies.length} reply
                            </Link>
                            <button onClick={() => handleShare(comment.documentId)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                              <img src="../images/replay3.svg" alt="share icon" />
                              Share
                            </button>

                          </span>
                        </div>


                        <div className="">
                          {/* replies */}
                          {comment.replies.length > 0 ?
                            (comment.replies.map((r) => (
                              <div className="doe-flex doe-flex-common" key={r.documentId}>
                                <div className="doe-left">
                                  <figure>
                                    <img src="../images/doe.png" alt="messgee.svg" />
                                  </figure>
                                </div>
                                < div className="doe-right" >
                                  <div className="name">
                                    <h4>{r.user?.username}</h4>
                                    <span>{formatTimeAgo(r.Date)}</span>
                                  </div>
                                  {r.Rimg ?

                                    <img src={`${process.env.NEXT_PUBLIC_API_URL}${r.Rimg?.url}`} alt={r.Title} />
                                    : ''}

                                  <p>
                                    {r.Text}
                                  </p>
                                  <div className="replay-sec">
                                    <span>
                                      <button onClick={(e) => handleReplyLikes(r.documentId)}>
                                        <img src="../images/replay1.svg" alt="like icon" /> {r.likes?.length} likes
                                      </button>

                                    </span>
                                  </div>
                                </div>

                              </div>

                            ))) : ''}
                          <div className="box-main">
                            <div className="box-flex">
                              <figure>
                                <img src="../images/profilebar.png" alt="messgee.svg" />
                              </figure>
                            </div>
                            <div className="box-content">
                              <form onSubmit={handleReplySubmit} >
                                <textarea
                                  className="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows={1}
                                  value={comment.documentId === commentID ? newReply : ''}
                                  onChange={(e) => handleReplyChange(e, comment.documentId)}
                                  placeholder={
                                    isAuthenticated ? "Write your comment here..." : "Please log in to join the discussion..."
                                  }
                                  onClick={!isAuthenticated ? () => openModal() : undefined}
                                />
                                {rfile && (
                                  <div className="imgs-uploads">
                                    {comment.documentId === commentID && (
                                      <>
                                        <img
                                          src={URL.createObjectURL(rfile)}
                                          alt="Preview"
                                          style={{ maxWidth: '150px', borderRadius: '5px' }}
                                        />
                                        <button
                                          type="button"
                                          onClick={handleRemoveReImage}
                                          title="Remove image"
                                        >
                                          ×
                                        </button>
                                      </>
                                    )}
                                  </div>

                                )}
                                <div className="emoji-flex">
                                  <div className="emoji-left">
                                    <label>
                                      <img src="../images/emoiy1.svg" alt="emoji1" />
                                      <input
                                        type="file"
                                        name="files"
                                        key={inputKey}
                                        onChange={(e) => handleFileReplyChange(e, comment.documentId)}
                                        style={{ display: 'none' }}
                                      />
                                    </label>

                                    <button type="button"
                                      onClick={(e) => handleShowPickerreply(comment.documentId)}>
                                      <img src="../images/emoiy2.svg" alt="emoji2" />
                                    </button>
                                  </div>
                                  <div className="emoji-right">
                                    <button className="primary-btn" type="submit" >Reply</button>
                                  </div>

                                </div>
                              </form>
                              {comment.documentId == valueiD && (
                                showPickerreply && (

                                  <EmojiPicker onEmojiClick={handleEmojiClickReply} />
                                ))}


                            </div>
                          </div>
                        </div>






                      </div>

                    </div>
                  ))
                  ) : <p>No comments yet</p>}

              </div>

              < div className="loadmore" >
                <button className="primary-btn" onClick={() => setLoadcomment(loadcomment + 3)}>Load more comments</button>
              </div>
            </div>
          </div>
        </div >
      </section >

      {/* Modal for login prompt */}
      < Modal isOpen={isModalOpen} onClose={closeModal} >
        <div className="subscribe-modal">
          <h2>Log in to join the discussion</h2>
          <p>Choose a login method to add your comment.</p>
          <div className="subscribe-links">
            <Login cutbox={closeModal} />
          </div>
        </div>
        <button onClick={() => setIsModalOpen(false)} className="cancil-btn">
          <img src="../images/cross.svg" alt="cross.svg" />
        </button>
      </Modal >
    </>
  );
}

export default ChatBox;
