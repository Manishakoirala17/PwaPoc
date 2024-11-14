 
import withPWA from 'next-pwa';
 
const config = {
  // here goes your Next.js configuration
      reactStrictMode:true
};
 
const nextConfig = withPWA({
  dest: 'public'
})(
  config
);
 
export default nextConfig;

