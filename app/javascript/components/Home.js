import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header"

export default () => (
  <>
    <Header />
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Referral Invites</h1>
          <p className="lead">
            A list of referral invitations.
          </p>
          <hr className="my-4" />
          <Link
            to="/referrals"
            className="btn btn-lg custom-button"
            role="button"
          >
            View referrals
          </Link>
        </div>
      </div>
    </div>
  </>
);
