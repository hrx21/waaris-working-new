export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  slug: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  initial: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
