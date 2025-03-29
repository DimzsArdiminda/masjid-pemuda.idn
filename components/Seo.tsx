// components/SEO.tsx
"use client";

import { DefaultSeo } from "next-seo";

const SEO = () => {
  return (
    <DefaultSeo
      title="Masjid Pemuda Indonesia"
    titleTemplate="%s | Masjid Pemuda Indonesia"
      description="Masjid Pemuda Indonesia"
      canonical="https://masjid-pemuda-indonesia.vercel.app/"
      openGraph={{
        type: "website",
        locale: "id_ID",
        url: "https://masjid-pemuda-indonesia.vercel.app/",
        site_name: "Masjid Pemuda Indonesia",
        // // images: [
        // //   {
        // //     url: "https://example.com/image.jpg",
        // //     width: 1200,
        // //     height: 630,
        // //     alt: "Gambar Website Saya",
        // //   },
        // ],
      }}
    />
  );
};

export default SEO;
