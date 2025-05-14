import { mySocials } from '../constants/mySocials';

const Footer = () => {
  return (
    <section className="c-space pb-3 text-sm text-neutral-400">
      <div className="mb-4 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col gap-3">
          <span className="text-lg font-semibold text-neutral-200">Guna Sai</span>
          <a
            href="/GunaSai_Resume.pdf"
            download
            className="px-3 py-2 text-sm text-white text-center bg-gradient-to-r from-lavender to-royal rounded-md cursor-pointer hover-animation w-fit"
          >
            Download Resume
          </a>
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
        </div>
      </div>
    </section>
  );
};

export default Footer;
