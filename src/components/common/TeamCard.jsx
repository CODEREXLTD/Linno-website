import Image from "next/image";
import Link from "next/link";

export default function TeamCard({name, position, imgSrc}) {
  return (
    <div className="flex items-center gap-4">
      {/* Profile Image */}
      <div className="w-20 h-20 rounded-full overflow-hidden">
        <Image
          src={imgSrc}
          alt={`Profile picture of ${name}`}
          width={80}
          height={80}
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          {name}
        </h3>
        <p className="text-gray-500 text-sm">{position}</p>
      </div>
    </div>
  );
}
