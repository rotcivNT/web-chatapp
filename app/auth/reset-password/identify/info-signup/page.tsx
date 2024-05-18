import { Toaster } from "@/components/ui/toaster";
import InfoSignup from "./InfoSignup";
import { Suspense } from "react";
function Page() {
  return (
    <div>
      <Suspense>
        <InfoSignup />
      </Suspense>
      <Toaster />
    </div>
  );
}

export default Page;
