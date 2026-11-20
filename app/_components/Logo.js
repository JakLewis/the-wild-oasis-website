import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src="/logo.png"
        quality="75, 90"
        height="60"
        width="60"
        alt="The Wild Oasis logo"
      />
      <span className="text-xl font-semibold text-primary-100 hover:text-accent-400">
        The Wild Oasis
        <span className="text-sm pl-2 font-semibold text-primary-100 hover:text-accent-400">
          by Jacquan Lewis
        </span>
      </span>
    </Link>
  );
}

export default Logo;
