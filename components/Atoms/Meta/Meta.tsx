import Head from "next/head";

interface MetaProps {
  title?: string;
  description?: string | undefined;
  imgUrl?: string;
  publishedTime?: string;
}

export const Meta = ({
  title,
  description,
  imgUrl,
  publishedTime,
}: MetaProps) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:site_name" content="BRONX" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
    </Head>
  );
};
