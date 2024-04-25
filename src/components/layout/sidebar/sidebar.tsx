import Link from "next/link";

export const SideBarCom = () => {
  return (
    <div className="bg-sidebar h-screen overflow-y-auto w-1/6 p-4">
      <ul>
        <li className="mb-4">
          <Link href="/">
            <span className="text-typo">Dashboard</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/users">
            <span className="text-typo">Users</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/products">
            <span className="text-typo">Products</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
