'use client'

import React, { useContext } from 'react';
import Link from 'next/link'; // Use Link from 'next/link'
import { FaArrowLeft, FaHome,  FaUser } from 'react-icons/fa';
import { BiSolidLogOutCircle } from 'react-icons/bi';

export default function Back() {
  const outlinedColumnStyle = {
    border: '2px solid #3034fa', // Adjust border style as needed
    padding: '20px', // Add padding for spacing
    borderRadius: '10px', // Add border radius for rounded corners
    margin: '6px', // Add margin on all sides
    backgroundColor: '#FFFFFF',
    overflowWrap: 'break-word',
    flex: 1,
  };

  return (
    <>
      <div className="pl-5 pr-5">
      <div className="row">
      <div className="col-12 col-md-6" style={outlinedColumnStyle}>
        <button
          className="back-button"
          style={{ marginRight: '10px', backgroundColor: '#3034fa', padding: '10px 5px' }}
          onClick={() => window.history.back()}
        >
          <FaArrowLeft style={{ fontSize: '36px' }} /> Back
        </button>
        <Link href="/" passHref>
          <button className="profile-button" style={{backgroundColor: '#3034fa', padding: '10px 5px'}}>
            <FaHome style={{ fontSize: '36px'}} /> Home
          </button>
        </Link>
      </div>
      </div>
    </div>
  </>
  );
};
