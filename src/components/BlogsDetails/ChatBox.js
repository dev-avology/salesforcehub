import React, { useState } from "react";
import Link from "next/link";
import CommonDrop from "../Dropdown/CommonDrop";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="custom-model">
      <div className="modal-overlay">
        <div className="modal">
          {children}
        </div>
      </div>
    </div>
  );
}

function ChatBox() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="join-detailsblog">
        <div className="join-detailsblog-bg">
          <img src="images/join-detailsblogbg1.png" alt="join-detailsblogbg" />
        </div>
        <div className="container">
          <div className="heading">
            <p>
              <span>
                <img src="images/messgee.svg" alt="messgee.svg" /> Join the
                discussion
              </span>
            </p>
          </div>
          <div className="box-main-container">
            <div className="box-main">
              <div className="box-flex">
                <figure>
                  <img src="images/profilebar.png" alt="messgee.svg" />
                </figure>
              </div>
              <div className="box-content">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                  placeholder="Please log in to join the discussion..."
                  onClick={openModal} // Trigger modal on click
                />
                <div className="emoji-flex">
                  <div className="emoji-left">
                    <Link href="#">
                      <img src="images/emoiy1.svg" alt="emoji1" />
                    </Link>
                    <Link href="#">
                      <img src="images/emoiy2.svg" alt="emoji2" />
                    </Link>
                    <Link href="#">
                      <img src="images/emoiy3.svg" alt="emoji3" />
                    </Link>
                  </div>
                  <div className="emoji-right">
                    <button className="primary-btn">Comment</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="details-comment">
              <div className="heading">
                <h3>12 comments</h3>
                <CommonDrop
                  options={[
                    { label: "Newest", value: "newest" },
                    { label: "Oldest", value: "oldest" },
                    { label: "Top", value: "top" },
                  ]}
                />
              </div>
              <div className="doe-flex doe-flex-common">
                <div className="doe-left">
                  <figure>
                    <img src="images/doe.png" alt="messgee.svg" />
                  </figure>
                </div>
                <div className="doe-right">
                  <div className="name">
                    <h4>John Doe</h4>
                    <span>2 hours ago</span>
                  </div>
                  <p>
                    This is a fantastic article! I particularly enjoyed the
                    insights about modern design trends and their impact on user
                    experience.
                  </p>
                  <div className="replay-sec">
                    <span>
                      <Link href="#">
                        <img src="images/replay1.svg" alt="like icon" /> 0 likes
                      </Link>
                      <Link href="#" className="active">
                        <img src="images/replay2.svg" alt="reply icon" />1 reply
                      </Link>
                      <Link href="#">
                        <img src="images/replay3.svg" alt="share icon" />
                        Share
                      </Link>
                    </span>
                  </div>
                  <div className="doe-flex">
                    <div className="doe-left">
                      <figure>
                        <img src="images/doe.png" alt="messgee.svg" />
                      </figure>
                    </div>
                    <div className="doe-right">
                      <div className="name">
                        <h4>John Doe</h4>
                        <span>2 hours ago</span>
                      </div>
                      <p>
                        Great article! Could you elaborate more on the system
                        design portion of the interview?
                      </p>
                      <div className="replay-sec">
                        <span>
                          <Link href="#">
                            <img src="images/replay1.svg" alt="like icon" /> 0
                            likes
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="box-main">
                    <div className="box-flex">
                      <figure>
                        <img src="images/profilebar.png" alt="messgee.svg" />
                      </figure>
                    </div>
                    <div className="box-content">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={1}
                        defaultValue={""}
                        placeholder="Please log in to join the discussion..."
                        onClick={openModal} // Trigger modal on click
                      />
                      <div className="emoji-flex">
                        <div className="emoji-left">
                          <Link href="#">
                            <img src="images/emoiy1.svg" alt="emoji1" />
                          </Link>
                          <Link href="#">
                            <img src="images/emoiy2.svg" alt="emoji2" />
                          </Link>
                        </div>
                        <div className="emoji-right">
                          <button className="primary-btn">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="doe-flex doe-flex-common">
                <div className="doe-left">
                  <figure>
                    <img src="images/mike.png" alt="mike" />
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
                        <img src="images/replay1.svg" alt="like icon" /> 0 likes
                      </Link>
                      <Link href="#" className="">
                        <img src="images/replay2.svg" alt="reply icon" />0 reply
                      </Link>
                      <Link href="#">
                        <img src="images/replay3.svg" alt="share icon" />
                        Share
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="loadmore">
                <button className="primary-btn">Load more comments</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for login prompt */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="subscribe-modal">
          <h2>Log in to join the discussion</h2>
          <p>
           Choose a login method to add your comment.
          </p>
          <form className="subscribe-form">
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email address" required />
            <button type="submit" className="primary-btn">
              Subscribe Now
            </button>
          </form>
          <p className="privacy-note">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
        <button onClick={() => setIsModalOpen(false)} className="cancil-btn">
          <img src="images/cross.svg" alt="cross.svg" />
        </button>
      </Modal>
    </>
  );
}

export default ChatBox;
