/* @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_HOST: "localhost",
    DB_PORT: "3306",
    DB_USER: "root",
    DB_DATABASE: "gympro-data",
    DB_PASSWORD: "",
  },
};

export default nextConfig;
