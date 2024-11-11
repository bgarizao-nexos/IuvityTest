import { useEffect, useState } from "react";
import randomuserApi from "../../api/randomuserApi";

interface User {
  name: string;
  location: string;
  username: string;
}

const useHeader = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await randomuserApi.get("");
      const data = response.data.results[0];
      setUser({
        name: `${data.name.first || ""} ${data.name.last || ""}`,
        location: `${data.location.city || ""}, ${data.location.country || ""}`,
        username: data.login.username,
      });
    } catch (error) {
      console.error("Error fetching randomuser:", error);
      throw new Error("No se pudieron obtener los datos del usuario.");
    }
  };

  return { user };
};

export default useHeader;
