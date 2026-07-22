import { ProfileCard } from "@/components/ProfileCard";
import { QuoteCard } from "@/components/QuoteCard";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="mx-auto max-w-md">
        <ProfileCard
          name="Alex"
          title="Computer Science Student"
          desc="Learning React and Next.js!"
          imageSrc="/moe.png"
        />
        <QuoteCard />
      </div>
    </main>
  );
}