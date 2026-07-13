import { LuCode, LuDatabase, LuRocket } from "react-icons/lu"
const About = () => {
  return (
    <section  id='about' className='py-24 overflow-hidden relative '>
        <div className='w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'
        >
            {/* leftside */}
            <div data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="top-center" className='flex justify-center lg:justify-start'>
                <div className='relative w-85 h-85 md:w120 md:h-120 rounded-2xl bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center'>
                <div className='absolute inset-0 rounded-2xl bg-primary/10 blur-2xl'/>
                <div className='w-[85%] relative '>
                    <img src="https://img.magnific.com/free-vector/dashboard-interface-user-panel-template_52683-23323.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                </div>
                </div>
            </div>
            {/* rightside */}
            <div  data-aos="fade-left" data-aos-delay="200" data-aos-anchor-placement="top-center" className='space-y-6'>
                <span className='text-sm text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-border inline-block'>
                About Taskzen
                </span>
               <h2 className='text-3xl md:text-4xl font-bold text-text leading-tight'>
                 This is very scalable and user-focused web applications
               </h2>
               <p className='text-gray-400 max-w-xl'>
                    Developed a full-stack project management application using Next.js, React, TypeScript, Tailwind CSS, Prisma, PostgreSQL, and NextAuth.!</p>
                 <p className='text-gray-400 max-w-xl'>
                    Developed a full-stack project management application using Next.js, React, TypeScript, Tailwind CSS, Prisma, PostgreSQL, and NextAuth.!</p>
                 <div className='grid gird-cols-1 sm:grid-cols-3 gap-4 pt-4'>
                    <div className='p-4 rounded-xl bg-surface border border-border text-center'>
                        <LuDatabase className='mx-auto mb-2 text-primary w-3 h-3'/>
                        <p className='text-text text-sm'>Fullstack Apps</p>
                    </div>
                    <div className='p-4 rounded-xl bg-surface border border-border text-center'>
                        <LuCode className='mx-auto mb-2 text-primary w-3 h-3'/>
                        <p className='text-text text-sm'>Clean clode</p>
                    </div>
                    <div className='p-4 rounded-xl bg-surface border border-border text-center'>
                        <LuRocket className='mx-auto mb-2 text-primary w-3 h-3'/>
                        <p className='text-text text-sm'>performance</p>
                    </div>

                 </div>
            </div>
        </div>
    </section>
  )
}

export default About
