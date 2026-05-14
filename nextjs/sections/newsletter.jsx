import SectionTitle from '@/components/section-title';

export default function Newsletter() {
    return (
        <section className='flex flex-col items-center justify-center mt-40'>
            <SectionTitle title='Join the newsletter' subtitle='Monthly insights on AI advertising, attribution benchmarks, and product updates from the team.' />

            <div className='flex bg-slate-100 text-sm p-1 rounded-full w-full max-w-xl my-10 border-2 border-white ring ring-slate-200'>
                <input className='flex-1 rounded-full pl-5 max-md:py-3 outline-none' type='email' placeholder='your@email.com' />
                <button className='font-medium hidden md:block btn text-white px-7 py-3 rounded-full hover:opacity-90 active:scale-95 transition'>
                    Subscribe
                </button>
            </div>
            <button className='font-medium md:hidden btn text-white px-7 py-3 rounded-full hover:opacity-90 active:scale-95 transition'>
                Subscribe
            </button>
        </section>
    );
}
