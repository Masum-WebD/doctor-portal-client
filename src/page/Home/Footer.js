import React from "react";
import footer from '../../assets/images/footer.png'

const Footer = () => {
  return (
    <footer style={{ background:`url(${footer})`,backgroundSize:'cover'}} className=" cover p-10 ">
      <div className=' footer text-black'>
      <div>
        <span className="footer-title">Services</span>
        <a href='f' className="link link-hover">Branding</a>
        <a href='f' className="link link-hover">Design</a>
        <a href='f' className="link link-hover">Marketing</a>
        <a href='f' className="link link-hover">Advertisement</a>
      </div>
      
      <div>
        <span className="footer-title">Company</span>
        <a href='f' className="link link-hover">About us</a>
        <a href='f' className="link link-hover">Contact</a>
        <a href='f' className="link link-hover">Jobs</a>
        <a href='f' className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a href='f' className="link link-hover">Privacy policy</a>
        <a href='f' className="link link-hover">Terms of use</a>
        <a href='f' className="link link-hover">Cookie policy</a>
      </div>
      </div>
      <div className='text-center text-black my-14'>
    <p>Copyright © 2022 - All right reserved</p>
  </div>
    </footer>
  );
};

export default Footer;
