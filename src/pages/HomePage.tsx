import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

function HomePage() {
  let content;
  const { isLoading, error } = useAuthContext();
  
  content = isLoading ? <div className="loading">Loading</div> : <div><div className="error">{ error }</div></div>

  return content ;
}

export default HomePage;
