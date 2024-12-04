import { ButtonOutline } from "@/components/UI/Button/ButtonOutline";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({
  title,
  link,
  image,
}: {
  title: string;
  link: string;
  image: string;
}) => {
  return (
    <div className="overflow-hidden">
      <div className="w-full overflow-hidden h-[200px] lg:h-[400px]">
        <Image
          width={800}
          height={700}
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4 lg:p-6 bg-white space-y-6">
        <Link
          href={link}
          className="text-xl lg:text-3xl hover:underline hover:text-primary transition-all"
        >
          {title}
        </Link>

        <ButtonOutline text="view site" link="#" />
      </div>
    </div>
  );
};
