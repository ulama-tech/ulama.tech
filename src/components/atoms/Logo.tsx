import Image from 'next/image';
import logoSrcLight from '../../assets/images/ulama_logo_441151_optimized.svg';
import logoSrcDark from '../../assets/images/ulama_logo_eef0f2_optimized.svg';
import { useTheme } from 'next-themes';

const Logo = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const logoSrc = currentTheme === 'dark' ? logoSrcDark : logoSrcLight;

  return (
    <span className="ml-2 self-center whitespace-nowrap text-xl font-lora text-gray-900 dark:text-white md:text-xl">
      <Image priority src={logoSrc} alt="Logo" height={48} style={{ display: 'inline-block' }} /> ulama
    </span>
  );
};

export default Logo;
