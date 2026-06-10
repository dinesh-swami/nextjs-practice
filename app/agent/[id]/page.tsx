import React from "react";

const page = async ({ params }) => {
  const value = await params;
  return (
    <div>
      <h1>product id{value}</h1>
    </div>
  );
};

export default page;
