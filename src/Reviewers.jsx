import checklist from './assets/CheckList.svg'
import google from './assets/google-png.png'
import meta from './assets/meta-png.png'
import star from './assets/Star_fill.svg'
import graystar from './assets/Star_fill_gray.svg'


function Reviewers() {
    return (
      <div className="flex flex-col lg:flex-row min-h-screen font-sora">  
        <div className="flex flex-col gap-5 justify-center flex-1 px-6 sm:px-12 lg:pl-20 py-10">
          <span className="inline-flex items-center justify-center rounded-full bg-[#fbb40f] h-10 w-10 text-xl">⭐️</span>
          <h1 className="font-bold text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] text-[#18181B]">Reviewers</h1>
          <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-[#52525A] leading-7 sm:leading-8 lg:leading-9">
            Reviewers is where people can access guidelines, checklists, and other tools to assist them in reviewing papers or manuscripts. It provides a structured approach to ensure that the review process is thorough, efficient, and consistent.
          </p>
          <ul className="text-[0.875rem] flex flex-col gap-3 text-[#52525A]">
            <li><img className='inline mr-2' src={checklist} alt="" />Checklist to Review an Academic Paper</li>
            <li><img className='inline mr-2' src={checklist} alt="" />Peer Review Checklist</li>
            <li><img className='inline mr-2' src={checklist} alt="" />Checklist for Editors, Reviewers, and Authors of SPIE Journals</li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-16 justify-center px-6 sm:px-12 lg:pr-20 py-10">
          <div className="flex  lg:justify-end justify-center">
            <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[400px] p-6 bg-white rounded-xl shadow-[0px_30px_100px_0px_rgba(17,_23,_41,_0.05)] flex flex-col gap-3">
              <div className='flex flex-row gap-2'>
                <img src={google} alt="google" />
                <div className='flex flex-row gap-1'>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={graystar} alt="" />
                </div>
              </div>
              <h1 className='font-bold text-[1.125rem] sm:text-[1.25rem] text-left text-[#18181B]'>Samantha Lee</h1>
              <p className='text-[#52525A]'>The checklist ensures that the review process is thorough</p>
            </div>
          </div>
  
          <div className="flex lg:justify-start justify-center">
            <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[400px] p-6 bg-white rounded-xl shadow-[0px_30px_100px_0px_rgba(17,_23,_41,_0.05)] flex flex-col gap-3">
              <div className='flex flex-row gap-2'>
                <img src={meta} alt="meta" />
                <div className='flex flex-row gap-1'>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
              <h1 className='font-bold text-[1.125rem] sm:text-[1.25rem] text-[#18181B]'>Rachel Patel</h1>
              <p className='text-[#52525A]'>I highly recommend the Writecream Business Description</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Reviewers;
  