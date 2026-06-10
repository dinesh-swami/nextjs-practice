/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";

// @ts-expect-error
const page = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      <h1>{slug[0]} {slug[1]}</h1>
    </div>
  );
};

export default page;
