import React from "react";
import AppLayout from "@/shared/layouts/app.layout";
import { KeyInputInterface } from "@/subdomains/keyinput/interfaces/keyinput.interface";

export function KeyInputContainer(): JSX.Element {
  return (
    <AppLayout>
      <KeyInputInterface />
    </AppLayout>
  );
}
