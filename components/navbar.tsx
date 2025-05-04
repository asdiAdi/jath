import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavbarLayout() {
  return (
    <nav className="w-full p-4  flex gap-4">
      <Button>
        <Link href="/">Home</Link>
      </Button>
      <Button>
        <Link href="/setup">Server Setup</Link>
      </Button>
      <Button>
        <Link href="/mods-tutorial">How to install Mods</Link>
      </Button>
      <Button>
        <Link href="/mod-list">Mod List</Link>
      </Button>
      <Button>
        <Link href="/server-cmd">Server Commands</Link>
      </Button>
    </nav>
  );
}
