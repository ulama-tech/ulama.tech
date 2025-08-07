import Image from 'next/image';
import logoSrcLight from '../../assets/images/ulama_logo.svg';
import logoSrcDark from '../../assets/images/ulama_logo.svg';
import { useTheme } from 'next-themes';

const Logo = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const logoSrc = currentTheme === 'dark' ? logoSrcDark : logoSrcLight;

  return (
    <span className="ml-1 self-center whitespace-nowrap text-xl font-dm-sans font-bold text-white dark:text-white md:text-2xl">
      <Image priority src={logoSrc} alt="Logo" height={30} style={{ display: 'inline-block' }} /> Ulama
    </span>
  );
};

export default Logo;
