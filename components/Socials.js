import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href="/" legacyBehavior>
        <a className="hover:text-accent transition-all duration-300">
          <RiYoutubeLine />
        </a>
      </Link>
      <Link href="/" legacyBehavior>
        <a className="hover:text-accent transition-all duration-300">
          <RiFacebookLine />
        </a>
      </Link>
      <Link href="/" legacyBehavior>
        <a className="hover:text-accent transition-all duration-300">
          <RiInstagramLine />
        </a>
      </Link>
      <Link href="/" legacyBehavior>
        <a className="hover:text-accent transition-all duration-300">
          <RiDribbbleLine />
        </a>
      </Link>
      <Link href="/" legacyBehavior>
        <a className="hover:text-accent transition-all duration-300">
          <RiBehanceLine />
        </a>
      </Link>
      <Link href="/" legacyBehavior>
        <a className="hover:text-accent transition-all duration-300">
          <RiPinterestLine />
        </a>
      </Link>
    </div>
  );
};

export default Socials;
