import Identify from "@/app/components/sign-up/Identify";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";

function IdentifyPage() {
  return (
    <div>
      <Suspense>
        <Identify />
      </Suspense>
      <Toaster />
    </div>
  );
}

export default IdentifyPage;
