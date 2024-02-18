import { ElementType } from "react";

export type NavItem = {
  label: string;
  Icon?: ElementType;
  url: string;
  className?: string;
};

export type FeatureCard = {
  Icon: ElementType;
  title: string;
  descriptionPoints: Array<string>;
};
