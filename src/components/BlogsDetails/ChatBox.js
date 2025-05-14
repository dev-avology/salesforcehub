import React, { useEffect, useState } from "react";
import Link from "next/link";
import CommonDrop from "../Dropdown/CommonDrop";
import API from '../../services/api'
import EmojiPicker from 'emoji-picker-react';



const loginMethods = [
  { href: "#", className: "white", img: "images/log1.svg", label: "Continue with Disqus" },
  { href: "#", className: "blue", img: "images/log2.svg", label: "Continue with Facebook" },
  { href: "#", className: "black", img: "images/log3.svg", label: "Continue with X" },
  { href: "#", className: "white", img: "images/log4.svg", label: "Continue with Google" },
  { href: "#", className: "white", img: "images/log5.svg", label: "Continue with Microsoft" },
  { href: "#", className: "black", img: "images/log6.svg", label: "Continue with Apple" },
];






function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="custom-model">
      <div className="modal-overlay">
        <div className="modal">{children}</div>
      </div>
    </div>
  );
}

function ChatBox({ comments, postID, updateComments }) {
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (comments.length > 0) {
      sortComments(filter);
    }
  }, [comments, filter]);


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

  const handleEmojiClick = (emojiData) => {
    setNewComments((prev) => prev + emojiData.emoji);
    setShowPicker(false);
  };

  const handleEmojiClickReply = (emojiData) => {
    console.log("kjk", emojiData);
    setNewReply((prev) => prev + emojiData.emoji);
    setShowPickerreply(false);
  };

  //...
  const handleShowPickerreply = (id) => {
    console.log("->", id);
    setValueiD(id);
    setCommentID(id);
    setShowPickerreply(true);
    console.log("->", valueiD);
  }



  const handleCommentChange = (e) => setNewComments(e.target.value);

  //handle comments
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const commentPayload = {
        data: {
          Text: newComments,
          Date: new Date().toISOString(),
          blog: postID,
          reactions: null,
          replies: null,
          user: 2,
        },
      };

      const commentRes = await API.post('/api/comments', commentPayload);
      const createdCommentId = commentRes.data.data.id;
      updateComments();

      // Reset the form
      setNewComments('');
      // setImage(null);
      // setImageFile(null);
    } catch (err) {
      console.error('Error submitting comment and reaction:', err.response?.data || err.message);
    }
  };


  //handle reply
  const handleReplySubmit = async (e) => {
    e.preventDefault();
    const replyPayload = {
      data: {
        Text: newReply,
        Date: new Date().toISOString(),
        commentID: commentID,
        reaction: null,
        user: 2,
      },
    };
    console.log(replyPayload);

    const replyRes = await API.post('/api/replies', replyPayload);
    console.log(replyRes);
    updateComments();
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
                <form onSubmit={handleSubmit} >
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    value={newComments}
                    onChange={handleCommentChange}
                    placeholder="Please log in to join the discussion..."
                  // onClick={openModal} // Trigger modal on click
                  />
                  <div className="emoji-flex">
                    <div className="emoji-left">
                      <Link href="#">
                        <img src="../images/emoiy1.svg" alt="emoji1" />
                      </Link>
                      <button type="button" onClick={() => setShowPicker(!showPicker)}>
                        <img src="../images/emoiy2.svg" alt="emoji2" />
                      </button>
                      <Link href="#">
                        <img src="../images/emoiy3.svg" alt="emoji3" />
                      </Link>
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
                          <h4>John Doe</h4>
                          <span>{formatTimeAgo(comment.Date)}</span>

                        </div>
                        <p>
                          {comment.Text}
                        </p>

                        <div className="replay-sec">
                          <span>
                            <Link href="#">
                              <img src="../images/replay1.svg" alt="like icon" /> 0 likes
                            </Link>
                            <Link href="#" className="active">
                              <img src="../images/replay2.svg" alt="reply icon" />{comment.replies.length} reply
                            </Link>
                            <Link href="#">
                              <img src="../images/replay3.svg" alt="share icon" />
                              Share
                            </Link>
                          </span>
                        </div>
                        <div className="doe-flex">
                          <div className="doe-flex doe-flex-common" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                                      <h4>John Doe</h4>
                                      <span>{formatTimeAgo(r.Date)}</span>
                                    </div>
                                    <p>
                                      {r.Text}
                                    </p>
                                    <div className="replay-sec">
                                      <span>
                                        <Link href="#">
                                          <img src="../images/replay1.svg" alt="like icon" /> 0
                                          likes
                                        </Link>
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
                                    value={newReply}
                                    onChange={(e) => handleReplyChange(e, comment.documentId)}
                                    placeholder="Please log in to join the discussion..."
                                  // onClick={openModal} // Trigger modal on click
                                  />
                                  <div className="emoji-flex">
                                    <div className="emoji-left">
                                      <Link href="#">
                                        <img src="../images/emoiy1.svg" alt="emoji1" />
                                      </Link>
                                      {/* onClick={() => setShowPickerreply(!showPickerreply)} */}
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

                                {/* {showPickerreply &&  (
                                     
                                  <EmojiPicker onEmojiClick={handleEmojiClickReply} />
                                )} */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  ))
                  ) : <p>No comments yet</p>}

              </div>
              {/* <div className="doe-flex doe-flex-common">
                <div className="doe-left">
                  <figure>
                    <img src="../images/mike.png" alt="mike" />
                  </figure>
                </div>
                <div className="doe-right">
                  <div className="name">
                    <h4>Mike Johnson</h4>
                    <span>5 hours ago</span>
                  </div>
                  <p>
                    Great perspective on this topic. I'd love to see more
                    articles exploring similar themes in the future.
                  </p>
                  <div className="replay-sec">
                    <span>
                      <Link href="#">
                        <img src="../images/replay1.svg" alt="like icon" /> 0 likes
                      </Link>
                      <Link href="#" className="">
                        <img src="../images/replay2.svg" alt="reply icon" />0 reply
                      </Link>
                      <Link href="#">
                        <img src="../images/replay3.svg" alt="share icon" />
                        Share
                      </Link>
                    </span>
                  </div>
                </div>
              </div> */}
              < div className="loadmore" >
                <button className="primary-btn" onClick={() => setLoadcomment(loadcomment + 3)}>Load more comments</button>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Modal for login prompt */}
      < Modal isOpen={isModalOpen} onClose={closeModal} >
        <div className="subscribe-modal">
          <h2>Log in to join the discussion</h2>
          <p>Choose a login method to add your comment.</p>
          <div className="subscribe-links">
            {loginMethods.map(({ href, className, img, label }, index) => (
              <Link href={href} className={className} key={index}>
                <img src={img} alt={label} /> {label}
              </Link>
            ))}
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
