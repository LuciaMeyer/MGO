"use client";

import Link from "next/link";
import useStickyHeader from "./useStickyHeader"

import Logo from "../Logo";
import Navbar from "../Navbar";
import MobileOffcanvas from "@/components/MobileOffcanvas";

export default function HeaderInner() {
  const { isSticky } = useStickyHeader()

  return (
    <>
      <div className={`header-inner ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12 mobile-menu-sticky">
                <Logo />
                <MobileOffcanvas />
              </div>
              <div className="col-lg-7 col-md-9 col-12 d-flex flex-column justify-content-end align-items-center">
                <Navbar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
