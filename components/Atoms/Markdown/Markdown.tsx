import { sanitize } from "isomorphic-dompurify";
import Image from "next/image";
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
            <div>
              <Image src={src!} alt={alt!} />
            </div>
          );
        },
        a: ({ node, children, href, ...props }) => {
          const linkProps = props;
          if (
            (href && !href.includes("mailto:")) ||
            (href && !href.includes(process.env.NEXT_PUBLIC_SITE as string))
          ) {
            return (
              <a
                {...linkProps}
                target="_blank"
                rel="noopener noreferrer"
                href={href}
              >
                {children}
              </a>
            );
          }
          return (
            <a {...linkProps} href={href}>
              {children}
            </a>
          );
        },
      }}
    >
      {sanitize(content)}
    </ReactMarkdown>
  );
};
