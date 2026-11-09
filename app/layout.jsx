import './globals.css';

export const metadata = {
  title: 'Waseem Patel | Enterprise Sales Leader & Huawei IdeaHub Consultant',
  description: 'Executive Portfolio of Waseem Patel — 20+ years driving enterprise IT solutions, smart office collaboration, and strategic channel partnerships across Dubai and MENA.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-ground text-ink antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}

