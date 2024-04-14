import React from 'react';
import './PopupAd.css'; // Adjust the path to your CSS file
// import popupadlogo from '../../assets/images/mozilla-vpn-brand.svg';
// import popupadlogo1 from '../../assets/images/mozilla-vpn.svg';

const PopupAd = ({ onClose }) => {
 const closePopup = () => {
    document.getElementById('mozilla-vpn').style.display = 'none';
 };

 return (
    <div id="mozilla-vpn" className="popupad">
      <div className="popup-contentad">
      <button className="closebtnad" onClick={closePopup}>
        X
      </button>
        <div className="ad-area">
          <div className="ad-title">
            <div className="title">
              <img id="monitor-logo" src="images/mozilla-vpn-brand.svg" alt="mozilla-monitor" />
            </div>
          </div>
          <div id="ad-view">
            <img id="monitor-ad-pic" src="images/mozilla-vpn.svg" alt="monitor-ad" />
            <div id="text">
              <h5>
                <b>
                 Surf, stream and get work done on servers in over 30 countries for a secure internet connection with a new perspective.
                </b>
              </h5>
            </div>
          </div>
          <a href="https://www.mozilla.org/en-US/products/vpn/">
            <button className="button-77" role="button">Get Mozilla VPN</button>
          </a>
        </div>
      </div>
    </div>
 );
};

export default PopupAd;
