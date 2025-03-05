const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 pb-3 border-t c-space pt-7 border-black-300">
      <div className="flex gap-2 text-white-500">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/StudentTahseenraza" 
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://linkedin.com/in/tahseen-raza-7500ab274" 
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/linked.png" alt="linkedin" className="w-1/2 h-1/2" /> 
        </a>
        
        <a
          href="https://leetcode.com/u/_tahseen_raza/" 
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/leetcode.webp" alt="leetcode" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2024 My portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
