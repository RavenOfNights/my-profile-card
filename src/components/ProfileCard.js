"use client";

import Image from "next/image";
import { useState } from "react";

export function ProfileCard({ name, title, desc, imageSrc }) {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <article className="rounded-xl bg-white p-6 text-gray-800 shadow-lg">
      <div className="flex items-center gap-4">
        <Image
          src={imageSrc}
          alt={name}
          width={96}
          height={96}
          className="h-24 w-24 shrink-0 rounded-full object-cover ring-4 ring-blue-200"
        />

        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">{title}</p>
          <p className="mt-1 text-sm">{desc}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setShowSkills((isOpen) => !isOpen)}
        aria-expanded={showSkills}
        aria-controls="profile-skills"
        className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        {showSkills ? "Hide Skills ▲" : "Show My Skills ▼"}
      </button>

      {showSkills && (
        <div id="profile-skills" className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">React</span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">Next.js</span>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-800">Tailwind CSS</span>
        </div>
      )}
    </article>
  );
}
