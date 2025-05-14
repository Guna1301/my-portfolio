import { mySocials } from '../constants/mySocials';

const Footer = () => {
  return (
    <section className="c-space pb-3 text-sm text-neutral-400">
      <div className="mb-4 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col gap-3">
          
        </div>

        <div className="flex flex-col items-start sm:items-end gap-2">
          <div className="flex gap-3">
            {mySocials.map((social, index) => (
              <a href={social.href} key={index} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} className="w-5 h-5" alt={social.name} />
              </a>
            ))}
          </div>
          <p>© 2025 Guna Sai. All rights reserved</p>
          <p>
            Icons from{' '} 
            <a
              href="https://icons8.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Icons8
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
