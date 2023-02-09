import { sanitize } from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import styles from "./styles.module.scss";

interface MarkdownProps {
  content: string;
  className?: string;
}

export const Markdown = ({ content, className }: MarkdownProps) => {
  return (
    <ReactMarkdown
      className={[styles.container, className].join(" ")}
      unwrapDisallowed={false}
      rehypePlugins={[rehypeRaw]}
      components={{
        img: ({ src, alt }) => {
          return (
            <span className={styles.imageContainer}>
              <Image
                className={styles.image}
                fill
                src={process.env.NEXT_PUBLIC_API + src!}
                alt={alt!}
              />
            </span>
          );
        },
        a: ({ node, children, href, ...props }) => {
          const linkProps = props;
          if (
            (href && !href.includes("mailto:")) ||
            (href && !href.includes(process.env.NEXT_PUBLIC_SITE as string))
          ) {
            return (
              <Link
                {...linkProps}
                target="_blank"
                rel="noopener noreferrer"
                href={href}
              >
                {children}
              </Link>
            );
          }
          return (
            <Link {...linkProps} href={href!}>
              {children}
            </Link>
          );
        },
      }}
    >
      {sanitize(content)}
    </ReactMarkdown>
  );
};
