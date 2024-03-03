import React from "react";
import useRemoteService from "../hooks/useRemoteService";

function StateHandler() {
  const { userEntry, loading, error } = useRemoteService([]);

  if (loading) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div class="d-flex justify-content-center">
        <div class="alert alert-danger" role="alert">
          {error.message}
        </div>
      </div>
    );
  }

  if (userEntry?.length === 0) {
    return (
      <div class="d-flex justify-content-center">
        <div class="alert alert-primary" role="alert">
          No data found
        </div>
      </div>
    );
  }
}

export default StateHandler;
