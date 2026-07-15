import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { ProxyAgent, setGlobalDispatcher } from "undici";

// 部分本地开发环境出网必须走代理,Node 的全局 fetch(undici)不会自动读取
// HTTP_PROXY/HTTPS_PROXY;生产环境(如 Vercel)没有设这两个变量,不受影响
const proxyUrl = process.env.HTTPS_PROXY || process.env.HTTP_PROXY;
if (proxyUrl) {
  setGlobalDispatcher(new ProxyAgent(proxyUrl));
}

const schema = z.object({
  organization: z.string().min(1),
  contactName: z.string().min(1),
  role: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().min(1).email(),
  interest: z.string().min(1),
  message: z.string().optional(),
});

const interestLabels: Record<string, string> = {
  school: "学校版",
  region: "区域版",
  custom: "定制版",
  other: "其他咨询",
};

// TODO: 收件邮箱当前硬编码,后续如需可改为环境变量 CONTACT_TO_EMAIL
// 未验证发信域名时,Resend 只允许发到注册 Resend 账号时用的邮箱
const TO_EMAIL = "2768070698@qq.com";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json({ error: "email_not_configured" }, { status: 500 });
  }

  const { organization, contactName, role, phone, email, interest, message } = parsed.data;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      // TODO: 使用自有域名验证后,替换为正式发件地址(如 noreply@你的域名)
      from: "官网联系表单 <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `官网新咨询:${organization} - ${contactName}`,
      text: [
        `学校/机构名称:${organization}`,
        `联系人姓名:${contactName}`,
        `职务:${role}`,
        `手机号:${phone}`,
        `邮箱:${email}`,
        `感兴趣的合作方向:${interestLabels[interest] ?? interest}`,
        `补充说明:${message?.trim() || "(无)"}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend returned an error:", error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
