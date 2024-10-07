import React from 'react'; 

function Footer(){

    return (
        <footer >
            <div className='h-[65vh] w-full flex items-center justify-between mt-20'>
           <div className='w-1/3'>
            <div className='h-24 w-72'>
                <img className='h-full w-full object-contain' src="https://davimgfx.github.io/hoobank/assets/logo.efc6c435.svg" alt="" />
            </div>
            <h2 className='pt-2 text-slate-400 text-xl font-poppinsRegular tracking-wide leading-7'>A new way to make the payments easy, reliable and secure.</h2>
           </div>
           <div className='flex items-start justify-between gap-20'>
            <div className='flex  justify-center flex-col gap-3'>
                <h1 className='font-poppinsMedium text-2xl pb-2'>Useful Links</h1>
                {["Contemt", "How It Works", "Create", "Explore", "Terms & Conditions"].map(elem=>(
                    <a className='text-xl font- text-slate-300 hover:text-sky-500' href="#">{elem}</a>
                ))}
            </div>
            <div className='flex  justify-center flex-col gap-3'>
                <h1 className='font-poppinsMedium text-2xl pb-2'>Community</h1>
                {["Help Centers", "Partners", "Suggestion", "Blog", "Newsletters"].map(elem=>(
                    <a className='text-xl font- text-slate-300 hover:text-sky-500' href="#">{elem}</a>
                ))}
            </div>
            <div className='flex  justify-center flex-col gap-3'>
                <h1 className='font-poppinsMedium text-2xl pb-2'>Partners</h1>
                {["Partners", "Become our Partner"].map(elem=>(
                    <a className='text-xl font- text-slate-300 hover:text-sky-500' href="#">{elem}</a>
                ))}
            </div>
           </div>
           
                </div>


                <div className='h-20 w-full'>

                <div className='h-[1px] w-full bg-slate-300'></div>
                <div className='flex items-center justify-between py-6'>
                    <p className='font-poppinsRegular text-xl w-fit'>Copyright © 2023 HooBank. All Rights Reserved.</p>


                    <div className='flex items-center justify-center gap-10'>
                    {[
          {
            logo: "https://davimgfx.github.io/hoobank/assets/instagram.a54e883a.svg",
          },
          {
            logo: "https://davimgfx.github.io/hoobank/assets/facebook.b1172216.svg",
          },
          {
            logo: "https://davimgfx.github.io/hoobank/assets/twitter.8f349e28.svg",
          },
          {
            logo: "https://davimgfx.github.io/hoobank/assets/linkedin.3be30c66.svg",
          },
        ].map((elem) => (
          <div className="h-6 w-6 ">
            <img className="h-full w-full object-contain" src={elem.logo} />
          </div>
        ))}
                    </div>
                </div>
                </div>
        </footer>
    )
}


export default Footer;