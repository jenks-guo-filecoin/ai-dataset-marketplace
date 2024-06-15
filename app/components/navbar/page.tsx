import Link from 'next/link';
import { useRainbow } from '@rainbow-me/rainbowkit';

export default function Navbar() {
const { connect, disconnect, isConnected } = useRainbow();

return (
  <nav className="flex flex-row gap-x-4 shadow-md text-black" role="navigation">
    <Link href="/market/buy" className='p-4 hover:bg-slate-500'>Buy</Link>
    <Link href="/market/sell" className='p-4 hover:bg-slate-500' >Sell</Link>
  </nav>
);
}