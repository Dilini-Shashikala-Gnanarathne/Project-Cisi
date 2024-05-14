const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className='heading text-center'>Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center '>
          Got a technical issues? Want to send feedback about a beta feature? Let us know.
        </p>
        <form action='#' className='space-y-8'>
          <div>
            <label htmlFor='email' className='text_textColor font-semibold text-[16px] mb-2 mt-1 leading-7'>Your Email</label>
            <input type='email' id='email' placeholder='example@gmail.com' className='w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-textColor placeholder:text-textColor cursor-pointer'></input>
          </div>
          <div>
            <label htmlFor='subject' className='text_textColor font-semibold text-[16px] mb-2 mt-1 leading-7'>Subject</label>
            <input type='subject' id='subject' placeholder='Let us know how we can help you' className='w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-textColor placeholder:text-textColor cursor-pointer'></input>
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor='message' className='text_textColor font-semibold text-[16px] mb-2 mt-1 leading-7'>Your Message</label>
            <textarea rows={6} type='message' id='message' placeholder='Leave a comment....' className='w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-textColor placeholder:text-textColor cursor-pointer'/>
          </div>
          <button type='submit' className='bg-primaryColor py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px] sm:w-fit'>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact