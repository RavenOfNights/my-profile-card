import Image from "next/image";

export function ProfileCard({ name, title, desc, imageSrc }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-6 text-gray-800 shadow-lg transition-all duration-300 hover:shadow-2xl">
      <Image
        src={imageSrc}
        alt={name}
        width={96}
        height={96}
        className="h-24 w-24 shrink-0 rounded-full object-cover ring-4 ring-blue-200 transition-all duration-300 hover:scale-105"
      />

      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{title}</p>
        <p className="mt-1 text-sm">{desc}</p>
      </div>
    </div>
  );
}