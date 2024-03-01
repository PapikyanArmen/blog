import React, { Suspense } from "react";
import Home from "@/app/home/component";

export default async function Index() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
}
