/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    mongodb_url: "mongodb+srv://tsdimitrov93:tsdimitrov93@cluster0.cplmobw.mongodb.net/?retryWrites=true&w=majority",
    mongodb_username: "dimitrov93",
    mongodb_password: "dimitrov93",
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: 'service_k4ilrce',
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: 'template_9qoxwnh',
    NEXT_PUBLIC_EMAILJS_USER_ID: '4TajOj_csladDDh56'
  },
};

export default nextConfig;
