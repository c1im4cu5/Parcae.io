"use client"; // This file is client-side only
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BootstrapClientWrapper({ children }) {
  useEffect(() => {
    // Dynamically load Bootstrap JavaScript on the client
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return <>{children}</>;
}
