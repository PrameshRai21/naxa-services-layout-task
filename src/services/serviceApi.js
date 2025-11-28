import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function getData() {
  const response = await axios.get("https://admin.naxa.com.np/api/services");
  return response.data;
}

export function getServicesData() {
  return useQuery({
    queryKey: ["services"],
    queryFn: getData,
  });
}
