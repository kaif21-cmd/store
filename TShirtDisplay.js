import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your images
import kaif from '../Components/Images/kaif.png';
import tshirt2 from  '../Components/Images/tshirt2.avif';
import tshirt1 from '../Components/Images/tshirt1.webp';


const TShirtDisplay = () => {
  return (
    <div>
      <div style={{ padding: '0 4px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ padding: '12px', border: '1px solid black', background: '#f0f0f0' }}>
            <img
              src={tshirt2}
              alt="Left T-Shirt"
              style={{ maxWidth: '45%', height: 'auto' }}
            />
          </div>
          <div style={{ padding: '12px', border: '1px solid black', background: '#f0f0f0' }}>
            <img
              src={tshirt1}
              alt="Right T-Shirt"
              style={{ maxWidth: '45%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        {/* Column 1 */}
        <div className="col-sm-12 col-md-6 col-lg-3" style={{ textAlign: 'center' }}>
          <div className="p-3 border bg-light" style={{ marginBottom: '20px' }}>
            <img
              src={tshirt2}
              alt="T-Shirt 1"
              className="img-fluid"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p>Column 1</p>
            <button type="button" className="btn btn-primary">Order Now</button>
          </div>
        </div>
        {/* Column 2 */}
        <div className="col-sm-12 col-md-6 col-lg-3" style={{ textAlign: 'center' }}>
          <div className="p-3 border bg-light" style={{ marginBottom: '20px' }}>
            <img
              src={tshirt1}
              alt="T-Shirt 2"
              className="img-fluid"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p>Column 2</p>
            <button type="button" className="btn btn-primary">Order Now</button>
          </div>
        </div>
        {/* Column 3 */}
        <div className="col-sm-12 col-md-6 col-lg-3" style={{ textAlign: 'center' }}>
          <div className="p-3 border bg-light" style={{ marginBottom: '20px' }}>
            <img
              src={tshirt1}
              alt="T-Shirt 3"
              className="img-fluid"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p>Column 3</p>
            <button type="button" className="btn btn-primary">Order Now</button>
          </div>
        </div>
        {/* Column 4 */}
        <div className="col-sm-12 col-md-6 col-lg-3" style={{ textAlign: 'center' }}>
          <div className="p-3 border bg-light" style={{ marginBottom: '20px' }}>
            <img
              src={tshirt2}
              alt="T-Shirt 4"
              className="img-fluid"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p>Column 4</p>
            <button type="button" className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TShirtDisplay;
