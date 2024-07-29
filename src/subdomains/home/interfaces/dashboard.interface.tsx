import React from "react";
import { CharacterCounter } from "@/subdomains/home/components/charatercounter/charatercounter.component";

export const DashboardInterface: React.FC = (): JSX.Element => {
  return (
    <section>
      <CharacterCounter />
    </section>
  );
};
