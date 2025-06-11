import React, { useState } from 'react'
import NewsletterModal from '../NewsLetter/NewsletterModal';
import API from '@/services/api';
import ConfirmModal from '../NewsLetter/confirmModel';

function Banner(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmMsg, setConfirmMsg] = useState("");
  const [confirmType, setConfirmType] = useState("info");

  const handleUserData = async (e) => {
    e.preventDefault();

    try {
      const existingSubscribers = await API.get('/api/subscribers');
      const subscribers = existingSubscribers?.data?.data;

      const emailExists = subscribers.some(
        (subscriber) => subscriber.email.toLowerCase() === email.toLowerCase()
      );

      if (emailExists) {
       setConfirmMsg("This email is already subscribed.");
        setConfirmType("error");
        setConfirmOpen(true);
        setEmail('');
       setName('');
        return;
      }

      await API.post('/api/subscribers', {
        data: {
          name,
          email,
        },
      });
      setIsModalOpen(false);
     setConfirmMsg("Successfully subscribed to the newsletter!");
      setConfirmType("success");
      setConfirmOpen(true);
      setIsModalOpen(false);
      setEmail('');
      setName('');
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <section className="site-banner">
        <div class="layers">
          <img src={props.heroLayer} alt="hero-layer" />
          <img src={props.heroLayerphone} alt="hero-layer" />
        </div>
        <div className="container">
          <div className="grid grid-cols-2 gap">
            <div className="item">
              <h1>
                {props.heading} <span> {props.colorHeading}</span>
              </h1>
              <p>
                {props.para}
              </p>
              {/* <a href="" className="primary-btn">{props.btn}</a> */}
              <button
                className="primary-btn"
                onClick={() => setIsModalOpen(true)}
              >
                {props.btn}
              </button>
              <NewsletterModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                handleUserData={handleUserData}
              />
              <ConfirmModal
                      isOpen={confirmOpen}
                      onClose={() => setConfirmOpen(false)}
                      message={confirmMsg}
                      type={confirmType}
                    />
            </div>
            <div className="item">
              <div className="img-bar">
                <img src={props.heroImg} alt="bnr-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Modal */}
      {/* {isModalOpen && (
        <div className="custom-model">
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="model-bg">
              <img src="../images/model-bg1.png" alt="model-bg" />
              <img src="../images/model-bg2.png" alt="model-bg" />
            </div>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="subscribe-modal">
                <h2>Join the newsletter & stay up to date!</h2>
                <p>
                  Stay connected and informed! Join our newsletter to receive the latest
                  updates, exclusive offers, and exciting news straight to your inbox
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
              <button onClick={() => setIsModalOpen(false)} className="cancil-btn">
                <img src="../images/cross.svg" alt="cross" />
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  )
}

export default Banner
