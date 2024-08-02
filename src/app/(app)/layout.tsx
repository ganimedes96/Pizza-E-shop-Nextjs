import { redirect } from "next/navigation";
import React from "react";

import { isAuthenticated } from "@/auth/auth";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return <>{children}</>;
}
