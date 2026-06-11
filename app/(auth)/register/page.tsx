import React from "react";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <Image src={"https://chaicode.com/assets/black-2-BQlauZxh.webp"} alt="image" width={200} height={200} />
      <h1>Register Page</h1>
      <Link href={"login"} prefetch replace={true}>
        Go to Login Page
      </Link>
    </div>
  );
};

export default page;
