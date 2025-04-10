"use client";

import React, { useContext } from 'react';
import { Modal, Row, Col, Button } from 'react-bootstrap';
import { AgeContext } from '../providers/ageProvider';

const AgeModal = ({ show, onClose }) => {
  const { Aged, unAge } = useContext(AgeContext);

  const handleYes = async () => {
    Aged();
  };

  const handleNo = async () => {
    unAge();
    window.location.href = '/terms';
  };

  return (
    <Modal show={show} onHide={handleNo}>
      <Modal.Header closeButton style={{color: 'black'}}>
        <Modal.Title>Cookies, Terms and Age Verification</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='custom-modal-body' style={{color: '#000000'}}>
          <Row>
            <Col>
              <p>
                Before proceeding, it is essential to acknowledge and accept our Terms of Service, Cookie Policy, and Privacy Policy. Additionally, you must confirm that you are at least 18 years old. We kindly request you to review the following documents before continuing.
              </p>
              <p>
                <a href="/terms">Terms and Conditions</a>
                <br />
                <a href="/privacy">Cookies and Privacy Policy</a>
                <br />
                <br />
                You must be 18 years of age or older to proceed.
              </p>
              <p>
                By clicking "Yes," you confirm your understanding and agreement to these terms.
              </p>
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleNo}>
          No
        </Button>
        <Button variant="primary" onClick={handleYes}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AgeModal;
