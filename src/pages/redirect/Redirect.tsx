import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const Redirect = () => {
  const { shortId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchLink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If short link exist, redirect to the origin url
  const fetchLink = async () => {
    const response = await axios.get(`${API_URL}/links/${shortId}`);
    if (response.status === 200) {
      window.location.href = `${API_URL}/redirect/${shortId}`;
    } else {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <span>
      Sorry, the link you accessed doesn't exist. Please keep in mind that our shortened links are case sensitive and may contain letters and numbers.
    </span>
  );
};