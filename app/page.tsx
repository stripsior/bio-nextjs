import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='lg:flex lg:w-full'>
        <div className='lg:sticky top-0 flex justify-center items-center h-screen w-full lg:w-9/12'>
            <div style={{ borderRadius: '30px' }} className='bg-blueb flex flex-col justify-center items-center w-11/12 h-5/6 lg:w-2/3 lg:h-3/5'>
                <Image src="./aa40f746f86f737fcff00b3f2a0c71be.webp" width={120} height={120} style={{ borderRadius: '50%' }} alt='stripsior' ></Image>
                <h1 className='font-extrabold text-3xl' > stripsior </h1>
                <p className='font-semibold text-xl'>Young fullstack developer</p>

                <div className='pt-3'>
                    <img src="https://skillicons.dev/icons?i=git,docker,ts,nextjs,nodejs,gcp,expressjs,js,py,html&perline=5" alt="Skills" />
                </div>
                <div className='pt-3 flex gap-3'>
                    <Link href='https://github.com/stripsior' className='underline'>Github</Link>
                    <Link href='https://fivestack.pl' className='underline'>FiveStack</Link>
                    <Link href='https://discord.com/users/842378070857875497' className='underline'>Discord</Link>
                </div>
            </div>
        </div>
        <div className=''>
            <div className='px-6 lg:px-14 pt-20 pb-20'>
                <h1 className='text-4xl font-extrabold'>Hello 👋</h1>
                <p className='text-xl font-semibold'>I&apos;m Jakub, 16 yo developer from <span className='text-white font-bold'>Pol</span><span className='text-red-500 font-bold'>and</span>. Actually I&apos;m teaching how to frontend and I think it&apos;s pretty good right now.</p>

                <h2 className='pt-10 text-3xl font-extrabold'>Education</h2>
                <ul className='pt-2 px-6 list-disc'>
                  <li> 2014 to 2022 - Primary school (Somewhere in Pomerania) </li>
                  <li> 2022 to now - Zespół Szkół Agrotechnicznych w Słupsku (IT) </li>
                </ul>

                <h2 className='pt-10 text-3xl font-extrabold'>Experience</h2>
                <p className='text-xl font-semibold'>My adventure with coding started several years ago and from this time. There&apos;s nothing special, because all of them are weird discord bots, but sometimes I have nice idea for projects. (RIP by promotion) </p>
                
                <h2 className='pt-10 text-3xl font-extrabold'>Actual Projects</h2>
                <ul className='pt-2 px-6 list-disc'>
                  <li> <Link href="https://fivestack.pl" className='text-white font-bold hover:text-gray-300'>FiveStack.pl</Link> ( <Link href="https://github.com/fivestackpl" className='text-white font-bold hover:text-gray-300'>Github</Link> ) </li>
                  <li> <Link href="https://fivestack.pl" className='text-white font-bold hover:text-gray-300'>FiveHost</Link> ( A alternative for pterodactyl, not released ) </li>
                </ul>
            </div>
        </div>
    </main>
  )
}
