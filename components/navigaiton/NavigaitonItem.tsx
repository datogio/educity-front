import Link from 'next/link';

interface NavLinksProps {
  link: string;
  name: string;
}

const NavItem = (props: NavLinksProps) => {
  return (
    <li className="transition duration-300 hover:scale-110 p-1 text-gray-700">
      <Link href={props.link}>
        <a className="">{props.name}</a>
      </Link>
    </li>
  );
};

export default NavItem;
