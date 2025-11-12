import type { Metadata } from 'next';
import { Geist, Space_Grotesk } from 'next/font/google';
import './(default)/css/globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CareerBoost AI - Smart Resume Optimizer',
  description: 'Transform your resume with AI-powered insights and land your dream job faster',
  applicationName: 'CareerBoost AI',
  keywords: ['resume', 'optimizer', 'job', 'application', 'ATS', 'career', 'AI', 'job search'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body
        className={`${geist.variable} ${spaceGrotesk.variable} antialiased bg-white text-gray-900`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
