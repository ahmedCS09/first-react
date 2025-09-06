let Footer = () => {
   return(
    <>
      <div className="w-screen min-w-[400px] h-32  bg-[rgba(120,148,29,1)] absolute mt-5 flex items-center flex-col">
        <footer className="text-gray-300 text-center py-3">
  © 2025 Ahmed Musab • Built with React & Tailwind CSS
</footer>
<div className="flex gap-10 justify-center">
    <a target="blank" href="https://www.facebook.com/ahmed.musab.54"><i className="itag fa-brands fa-facebook"></i></a>
    <a target="blank" href="https://www.instagram.com/real_ahmed_09/"><i className="itag fa-brands fa-instagram"></i></a>
    <a target="blank" href="https://www.linkedin.com/in/ahmed-musab-9b1a8a295/"><i className="itag fa-brands fa-linkedin-in"></i></a>
    <a target="blank" href="https://github.com/ahmedCS09"><i className="itag fa-brands fa-github"></i></a>
</div>

      </div>
    </>
   )
}

export default Footer