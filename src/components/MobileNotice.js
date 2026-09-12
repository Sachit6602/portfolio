import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { AiOutlineDesktop } from "react-icons/ai";

const KEY = "seen-mobile-notice";

function MobileNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(max-width: 768px)").matches) return;
    try {
      if (sessionStorage.getItem(KEY)) return;
    } catch {
      // private mode can throw on storage access; just show the notice
    }
    const timer = setTimeout(() => setShow(true), 1600); // let the preloader lift first
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setShow(false);
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {}
  };

  return (
    <Modal show={show} onHide={dismiss} centered contentClassName="custom-modal mobile-notice">
      <Modal.Body className="text-center">
        <AiOutlineDesktop className="mobile-notice-icon" />
        <p>Use a Desktop for a better experience of my portfolio.</p>
        <Button variant="primary" onClick={dismiss}>
          Got it
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default MobileNotice;
