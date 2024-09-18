/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  env: {
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: "sWy_HojQo_4U0hGY3",
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: "service_zhyoe8l",
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: "template_t9u6uy3",
  },
};

export default nextConfig;
