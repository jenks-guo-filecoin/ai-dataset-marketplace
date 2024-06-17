"use client";
import Link from 'next/link';
import Image from 'next/image';
import buyDataset from '../images/buy-dataset.svg';
import sellCrypto from '../images/sell-crypto.svg';

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white text-black py-5">
      <div className="max-w-md mx-5 my-3 bg-white rounded-xl border-solid border-2 border-slate-900 overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0 p-5">
            <Image className="h-48 w-48 object-cover md:h-full md:w-48" src={buyDataset} alt="Vector DB Icon" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-slate-500 font-semibold">Dataset Market</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Looking for datasets for AI project?</a>
            <p className="mt-2 text-slate-500">Preview the datasets on IPFS, connect your wallet and purchase encrypted datasets here.
            </p>
            <Link href="/market/buy">
                <button className='mt-2 rounded-full px-4 py-3 bg-slate-900 text-white hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 duration-500'>
                View Datasets
                </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-5 my-3 bg-white rounded-xl border-solid border-2 border-slate-900 overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0 p-5">
            <Image className="h-48 w-48 object-cover md:h-full md:w-48" src={sellCrypto} alt="Crypto Icon" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-slate-500 font-semibold">Dataset Uploader</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Got valuable dataset for AI? </a>
            <p className="mt-2 text-slate-500">Upload to Filecoin, set a price and sell your datasets to the world.
            </p>
            <Link href="/market/buy">
                <button className='mt-2 rounded-full px-4 py-3 bg-slate-900 text-white hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 duration-500'>
                Upload Datasets
                </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
