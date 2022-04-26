import React, {useState} from 'react';
import newsletter from '../../assets/root/newsletter.png';
import './SubscriptionModal.module.css'

export default function SubscriptionModal() {
  const [modalState, setModalState] = useState('modal')
  
  return (
    <div className={modalState} data-modal>
  
      <div className="modal-close-overlay" data-modal-overlay></div>
  
      <div className="modal-content">
  
        <button className="modal-close-btn" onClick={()=>{setModalState(([...modalState+' closed']).join(''))}}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
  
        <div className="newsletter-img">
          <img src={newsletter} alt="subscribe newsletter" width="400" height="400" />
        </div>
  
        <div className="newsletter">
  
          <form action="#">
  
            <div className="newsletter-header">
  
              <h3 className="newsletter-title">Subscribe Newsletter.</h3>
  
              <p className="newsletter-desc">
                Subscribe the <b>Anon</b> to get latest products and discount update.
              </p>
  
            </div>
  
            <input type="email" name="email" className="email-field" placeholder="Email Address" required />
  
            <button type="submit" className="btn-newsletter">Subscribe</button>
  
          </form>
  
        </div>
  
      </div>
  
    </div>  

  )
}
