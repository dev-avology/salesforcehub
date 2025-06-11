import React from "react";

const NewsletterModal = ({
  isOpen,
  onClose,
  name,
  setName,
  email,
  setEmail,
  handleUserData,
}) => {
  if (!isOpen) return null;

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="custom-model">
      <div className="modal-overlay" onClick={onClose}>
        <div className="model-bg">
          <img src="../images/model-bg1.png" alt="model-bg1" />
          <img src="../images/model-bg2.png" alt="model-bg2" />
        </div>
        <div className="modal" onClick={stopPropagation}>
          <div className="subscribe-modal">
            <h2>Join the newsletter & stay up to date!</h2>
            <p>
              Stay connected and informed! Join our newsletter to receive the latest
              updates, exclusive offers, and exciting news straight to your inbox.
            </p>
            
            <form className="subscribe-form" onSubmit={handleUserData}>
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="primary-btn">
                Subscribe Now
              </button>
            </form>
            <p className="privacy-note">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
          <button onClick={onClose} className="cancil-btn">
            <img src="../images/cross.svg" alt="cross" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
