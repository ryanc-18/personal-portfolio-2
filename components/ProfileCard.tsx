interface ProfileCardProps {
  name: string;
  role: string;
  company: string;
  imageUrl?: string;
}

export default function ProfileCard({
  name,
  role,
  company,
  imageUrl = 'https://via.placeholder.com/68',
}: ProfileCardProps) {
  return (
    <div className="rounded-lg border bg-white shadow-md mb-5 flex items-center max-w-full py-8 px-4 border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Avatar */}
      <span className="relative flex h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full">
        <img className="aspect-square h-full w-full object-cover" src={imageUrl} alt={name} />
      </span>

      {/* Text Content */}
      <div className="pl-4">
        <p className="text-xl font-extrabold leading-tight text-gray-900 md:text-3xl">{name}</p>
        <p className="text-sm font-medium text-gray-500 mt-1 md:text-base">{role}</p>
        <p className="text-xs text-gray-400 mt-1">{company}</p>
      </div>
    </div>
  );
}
