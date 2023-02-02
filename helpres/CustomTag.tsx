import { createElement, ReactNode } from "react";

interface CustomTagProps {
  tag: string;
  children: ReactNode;
  className?: string;
}
/**
 * ## Method for creating custom tags
 *  `tag`: some tag like: `h1`, `p`, `div` etc...
 *
 * `className`: use if you need to add a class
 *
 * ### Example usage:
 * ```tsx
 * <CustomTag tag="h1" className="style-classes">{children}</CustomTag>
 * ```
 *
 */

export const CustomTag = ({
  tag,
  children,
  className,
  ...props
}: CustomTagProps) => {
  return createElement(`${tag}`, { className, ...props }, children);
};
