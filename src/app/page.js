import Link from "next/link";
 
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8 text-gray-900">
      <h1>My Workspace</h1>
 
      <Link href="/about">Go to About Me</Link>
    </main>
  );
}