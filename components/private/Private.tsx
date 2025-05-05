
"use client";

import React, { useEffect, useState } from "react";
import privateApi from "@/app/api/private/route";
import { useRouter } from "next/navigation";
import { localstorageGetData } from "../localstorage/localstorage";

const Private = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const data = localstorageGetData({params:'user'});
    setUser(data);
    if (!data) {router.push("/"); } else {fetchData(data);}
  }, []);

  const fetchData = async (userData: string) => {

    try {
      const hello = await privateApi(userData);
      console.log('api ',hello)
      if(!hello.bool){ router.push('/') }

    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };

  if (!user) return <p>Pending....................</p>;

  return <>{children}</>;
};

export default Private;