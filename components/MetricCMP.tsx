import { countNumber } from "@/lib/utils";
import React from "react";

interface Props {
  icon: React.ReactNode;
  number: number;
  label: string;
}

const MetricCMP: React.FC<Props> = ({ icon, number, label }) => {
  return (
    <div
    key={label}
    className="flex items-center justify-center gap-1 "
  >
    <div>{icon}</div>
    <div
      className="flex items-center justify-center
"
    >
      {countNumber(number)} {label} 
    </div>
  </div>
  );
};

export default MetricCMP;
