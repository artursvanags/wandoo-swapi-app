interface RootLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="container px-6">{children}</div>
    </>
  );
}
