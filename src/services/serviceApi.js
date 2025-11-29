import { useQuery } from "@tanstack/react-query";
import { request } from "./configApi";

export function getServicesData() {
  return useQuery({
    queryKey: ["services"],
    queryFn: () => request({ url: "/api/services", method: "GET" }),
  });
}
