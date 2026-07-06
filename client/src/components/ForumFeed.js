// src/components/ForumFeed.js
import { useEffect, useState } from "react";
import axios from "axios";

export default function ForumFeed({ filterType, propertyId }) {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const params = {};
    if (filterType) params.type = filterType;
    if (propertyId) params.propertyId = propertyId;

    axios.get("/api/announcements", { params }).then((res) => {
      setAnnouncements(res.data.announcements);
    });
  }, [filterType, propertyId]);

  return (
    <div>
      <h2>Property Announcements</h2>
      {announcements.map((a) => (
        <div key={a._id} className="announcement-card">
          <p>
            <strong>{a.user.name}</strong> marked property{" "}
            <em>{a.property.title}</em> at {a.property.location} as{" "}
            <span className={a.type}>{a.type.toUpperCase()}</span>
          </p>
          <small>{new Date(a.createdAt).toLocaleString()}</small>
          {a.proof && <a href={a.proof}>View proof</a>}
        </div>
      ))}
    </div>
  );
}
