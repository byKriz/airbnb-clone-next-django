import MenuIcon from "@/app/icons/navBar/MenuIcon";
import UserIcon from "@/app/icons/navBar/UserIcon";

export function UserNav() {
  return (
    <div className="p-2 relative inline-block border rounded-full">
      <button className="flex items-center">
        <MenuIcon />
        <UserIcon />
      </button>
    </div>
  );
}
