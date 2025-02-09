import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AuthLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");

  console.log(token);

  if (token) {
    redirect("/journalBoard");
  }

  return <div>{children}</div>;
};

export default AuthLayout;
