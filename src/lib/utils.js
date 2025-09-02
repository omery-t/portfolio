import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...input) => {
    return twMerge(clsx(input));
};

export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
