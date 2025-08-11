export const scrollToSection = (sectionId: string, headerOffset: number = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const getHeaderHeight = (): number => {
  const header = document.getElementById('header');
  return header ? header.offsetHeight : 80;
};