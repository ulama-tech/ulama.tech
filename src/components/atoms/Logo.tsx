const Logo = () => {
  return (
    <span className="ml-1 self-center whitespace-nowrap text-xl font-dm-sans font-bold text-white dark:text-white md:text-2xl">
      <img 
        src="/images/ulama_logo.svg" 
        alt="Logo" 
        width={30}
        height={30} 
        style={{ display: 'inline-block' }} 
      /> Ulama
    </span>
  );
};

export default Logo;
