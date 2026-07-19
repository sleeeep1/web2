// Vercel 部署时会自动注入 VERCEL_URL(如 web2-xxx.vercel.app);
// 绑定正式域名后,建议改用 NEXT_PUBLIC_SITE_URL 环境变量覆盖
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
