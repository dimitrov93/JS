export default function UnprotectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>unprotected layout</h1>
      {children}
    </>
  );
}
