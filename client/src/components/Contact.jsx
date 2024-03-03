import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const fetchLandlord = async () => {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      };
      fetchLandlord();
    } catch (error) {
      setError(error.message);
    }
  }, [listing.userRef]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      {error && <p className="text-red-700 text-sm">{error}</p>}
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for <span className="font-semibold">{listing.name}</span>
          </p>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="2"
            value={message}
            placeholder="Enter a message..."
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          ></textarea>

          <Link
            className="bg-slate-700 p-3 text-center text-white rounded-lg hover:opacity-90"
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
