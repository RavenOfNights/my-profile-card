import { ProfileCard } from "@/components/ProfileCard";

export default function About() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <ProfileCard
        name="Alex"
        title="Computer Science Student"
        desc="Learning React and Next.js!"
        imageSrc="/moe.png"
      />
    </main>
  );
}