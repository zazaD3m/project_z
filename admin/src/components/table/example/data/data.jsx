import { HelpCircle, Check, TimerReset } from "lucide-react";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const dates = [
  {
    value: "order date",
    label: "order date",
    icon: HelpCircle,
  },
];

export const deliveries = [
  {
    label: "Delivered",
    value: "delivered",
    icon: Check,
  },
  {
    label: "Waiting",
    value: "waiting",
    icon: TimerReset,
  },
];
