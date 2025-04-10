"use client";

import React, { useState, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ProgressModal = ({ show, onClose }) => {

return (
  <Modal show={show} onHide={onClose} centered>
    <Modal.Header closeButton style={{color: 'black'}}>
      <Modal.Title>In Development</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className = 'custom-modal-body'>
        <p>Feature development is on-going.</p>
        <div className="custom-roadmap" style={{ height: '220px', border: '2px solid #000000', backgroundColor: '#FFFFFF', marginBottom: '8px', borderRadius: '10px' }}>
          <div className="progress" style={{ width: '100px', margin: 'auto' }}>
            <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <Button variant="primary" onClick={onClose}>Close</Button>
      </div>
    </Modal.Body>
  </Modal>
  );
};

export default ProgressModal;
