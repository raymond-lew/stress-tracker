import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../components/state-provider";

function useRemoteService(initial) {
  const [userEntry, setUserEntry] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const userDisplayName = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:5000/api/entries", {
        params: { username: userDisplayName },
      })
      .then((res) => {
        setUserEntry(res.data.dataRate);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [userDisplayName]);

  return { userEntry, loading, error };
}

export default useRemoteService;
