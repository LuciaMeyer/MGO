"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Offcanvas } from "react-bootstrap";
import Icon from "@/components/Icon";
import { navegacion } from "@/data/navegacion";

import Logo from "../../../public/img/logo_mgo.webp";

export default function MobileOffcanvas() {
  const pathname = usePathname()

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <button
        type="button"
        onClick={handleShow}
        className="mobile-menu-offcanvas-toggler"
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {/* <!-- Mobile Menu Modal --> */}
      <Offcanvas show={show} onHide={handleClose} className="mobile-menu-modal">
        <div className="modal-dialog offcanvas-dialog">
          <div className="modal-content">
            <div className="modal-header offcanvas-header">
              <div className="offcanvas-logo">
                <Link href="/" onClick={handleClose}>
                  <Image src={Logo} alt="#" width={134} height={36} />
                </Link>
              </div>
              <button type="button" className="btn-close" onClick={handleClose}>
                <Icon className="fa fa-times" />
              </button>
            </div>
            <div className="mobile-menu-modal-main-body">
              {/* Offcanvas Menu */}
              <nav id="offcanvas-menu" className="navigation offcanvas-menu">
                <ul id="nav" className="list-none offcanvas-men-list">
                  {navegacion.map((item) => (
                    <li key={item.href}>
                      <Link
                        className={`menu-arrow${
                          pathname === item.href ? " active" : ""
                        }`}
                        onClick={handleClose}
                        href={item.href}
                        aria-current={
                          pathname === item.href ? "page" : undefined
                        }
                      >
                        {item.texto}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Offcanvas>
    </>
  );
}
