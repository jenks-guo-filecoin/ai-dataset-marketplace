import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from "wagmi";


export default function Navbar() {

const { chain, status } = useAccount();

return (
  <nav className="flex flex-row gap-x-4 text-black w-screen mt-5 border-2 border-slate-900 rounded-lg mr-5" role="navigation" >
    <Link href="/">
      <h1 className='p-4'>AI</h1>
    </Link>
    <Link href="/market/buy" className='p-4 hover:bg-black hover:text-white duration-500'>
      Buy
    </Link>
    <Link href="/market/sell" className='p-4 hover:bg-black hover:text-white duration-500' >
      Sell
    </Link>
    <div className='p-2 pr-5 max-w-500 ml-auto '>
      <ConnectButton />
    </div>
  </nav>
);
}