import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const DesignApplicationStatus = () => {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const id = localStorage.getItem("id");
      if (!id) {
        console.error("User id not found in localStorage");
        return;
      }

      console.log("id12", id);
      const token = Cookies.get("jwtToken");
      try {
        const response = await axios.get(
          `https://mfc-recruitment-portal-be.vercel.app/applicatiostatus/statusdesign/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("response", response);
        if (response.data) {
          setStatus(response.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <p className="text-prime text-sm ">{status}</p>;
};

export default DesignApplicationStatus;
