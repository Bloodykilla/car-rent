import Head from "next/head";
import { useRouter } from "next/router";

interface MetaProps {
  title?: string;
  locale?: string;
  description?: string | undefined;
  imgUrl?: string;
  publishedTime?: string;
  user?: string;
}

export const Meta = ({
  title,
  locale = "en_US",
  description,
  imgUrl,
  publishedTime,
  user = "BronX Rentals",
}: MetaProps) => {
  const router = useRouter();

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:site_name" content="BRONX" />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content="website" />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {imgUrl ? (
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_API}${imgUrl}`}
        />
      ) : (
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_SITE}/favicon/android-chrome-512x512.png`}
        />
      )}
      {imgUrl ? (
        <meta
          property="og:image:secure_url"
          content={`${process.env.NEXT_PUBLIC_API}${imgUrl}`}
        />
      ) : (
        <meta
          property="og:image:secure_url"
          content={`${process.env.NEXT_PUBLIC_SITE}/favicon/android-chrome-512x512.png`}
        />
      )}
      {user && <meta property="article:author" content={user} />}
      <link
        rel="alternate"
        href={`${process.env.NEXT_PUBLIC_SITE}${
          router?.asPath !== "/" ? router?.asPath : ""
        }`}
        hrefLang="x-default"
      />
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {imgUrl ? (
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_API}${imgUrl}`}
        />
      ) : (
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_SITE}/favicon/android-chrome-512x512.png`}
        />
      )}
      <link rel="icon" href="/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};
