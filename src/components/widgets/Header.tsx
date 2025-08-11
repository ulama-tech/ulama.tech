'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '~/components/atoms/Logo';
import ToggleMenu from '../atoms/ToggleMenu';
import { headerData } from '~/shared/data/global.data';
import CTA from '../common/CTA';
import { CallToActionType } from '~/shared/types';
import { scrollToSection, getHeaderHeight } from '~/utils/scroll';

const Header = () => {
  const { links, actions, isSticky, position } = headerData;

  const updatedIsDropdownOpen =
    links &&
    links.map(() => {
      return false;
    });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(updatedIsDropdownOpen as boolean[]);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);

  const handleDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.forEach((value, i) => {
        if (value === true) {
          newValues[i] = false;
        } else {
          newValues[i] = i === index;
        }
      });
      return newValues;
    });
  };

  const handleCloseDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = false;
      return newValues;
    });
  };

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  const handleInternalNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const headerHeight = getHeaderHeight();
    scrollToSection(href, headerHeight);

    // Close mobile menu if open
    if (isToggleMenuOpen) {
      setIsToggleMenuOpen(false);
    }

    // Close any open dropdowns
    setIsDropdownOpen(updatedIsDropdownOpen as boolean[]);
  };

  return (
    <header
      className={`top-0 z-50  w-full md:px-8 flex-none bg-primary transition-all duration-100 ease-in dark:bg-primary  md:backdrop-blur-lg  ${isSticky ? 'sticky' : 'relative'
        } border-b-2 border-white/10`}
      id="header"
    >
      <div className="mx-auto w-full  py-2 px-3 md:flex md:justify-between md:py-2 md:px-4 max-w-[100rem]">
        <div className="flex justify-between">
          <Link
            className="flex items-center"
            href="/"
            onClick={() =>
              isToggleMenuOpen ? handleToggleMenuOnClick() : setIsDropdownOpen(updatedIsDropdownOpen as boolean[])
            }
          >
            <Logo />
          </Link>
          <div className="flex items-center md:hidden">
            <ToggleMenu handleToggleMenuOnClick={handleToggleMenuOnClick} isToggleMenuOpen={isToggleMenuOpen} />
          </div>
        </div>
        <AnimatePresence>
          {isToggleMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/20 z-30 md:hidden"
                onClick={handleToggleMenuOnClick}
              />
              <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="absolute top-full left-0 right-0 bg-primary/90 backdrop-blur-lg z-40 border-b-2 border-white/10 shadow-lg md:hidden"
                aria-label="Main navigation"
              >
                <ul className="flex w-full flex-col py-4 text-lg">
                  {links &&
                    links.map(({ label, href, icon: Icon, links, isInternal }, index) => (
                      <li key={`item-link-${index}`} className={links?.length ? 'dropdown' : ''}>
                        {links && links.length ? (
                          <>
                            <button
                              className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out text-primary-text-white hover:opacity-80"
                              onClick={() => handleDropdownOnClick(index)}
                            >
                              {label} {Icon && <Icon className="ml-0.5 hidden h-3.5 w-3.5 md:inline" />}
                            </button>
                            <ul
                              className={`${isDropdownOpen[index] ? 'block' : 'md:hidden'
                                } rounded pl-4 font-medium drop-shadow-xl md:absolute md:min-w-[200px] md:bg-white/90 md:pl-0 md:backdrop-blur-md dark:md:bg-slate-900/90`}
                            >
                              {links.map(({ label: label2, href: href2 }, index2) => (
                                <li key={`item-link-${index2}`}>
                                  <Link
                                    className="whitespace-no-wrap block py-2 px-5 first:rounded-t last:rounded-b dark:hover:bg-gray-700 md:hover:bg-gray-200"
                                    href={href2 as string}
                                    onClick={() =>
                                      isToggleMenuOpen ? handleToggleMenuOnClick() : handleCloseDropdownOnClick(index)
                                    }
                                  >
                                    {label2}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <>
                            {isInternal ? (
                              <button
                                className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out text-primary-text-white hover:opacity-80 w-full text-left"
                                onClick={(e) => handleInternalNavigation(href as string, e)}
                              >
                                {label}
                              </button>
                            ) : (
                              <Link
                                className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out text-primary-text-white hover:opacity-80"
                                href={href as string}
                                onClick={() => (isToggleMenuOpen ? handleToggleMenuOnClick() : handleDropdownOnClick(index))}
                              >
                                {label}
                              </Link>
                            )}
                          </>
                        )}
                      </li>
                    ))}
                </ul>
                <div className="w-full p-4">
                  <button className="bg-secondary text-white font-medium py-3 px-8 rounded-md hover:bg-orange-500 transition-all duration-200 ease-in-out w-full shadow-orange-glow">
                    Book a Demo
                  </button>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:w-full justify-center w-auto text-primary-text-white md:mx-5 md:h-auto md:items-center md:overflow-visible md:static md:bg-transparent md:backdrop-blur-none md:flex-row" aria-label="Main navigation">
          <ul className="flex w-auto flex-row self-center text-base">
            {links &&
              links.map(({ label, href, icon: Icon, links, isInternal }, index) => (
                <li key={`desktop-item-link-${index}`} className={links?.length ? 'dropdown' : ''}>
                  {links && links.length ? (
                    <>
                      <button
                        className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out text-primary-text-white hover:opacity-80"
                        onClick={() => handleDropdownOnClick(index)}
                      >
                        {label} {Icon && <Icon className="ml-0.5 hidden h-3.5 w-3.5 md:inline" />}
                      </button>
                      <ul
                        className={`${isDropdownOpen[index] ? 'block' : 'md:hidden'
                          } rounded pl-4 font-medium drop-shadow-xl md:absolute md:min-w-[200px] md:bg-white/90 md:pl-0 md:backdrop-blur-md dark:md:bg-slate-900/90`}
                      >
                        {links.map(({ label: label2, href: href2 }, index2) => (
                          <li key={`desktop-item-link-${index2}`}>
                            <Link
                              className="whitespace-no-wrap block py-2 px-5 first:rounded-t last:rounded-b dark:hover:bg-gray-700 md:hover:bg-gray-200"
                              href={href2 as string}
                              onClick={() => handleCloseDropdownOnClick(index)}
                            >
                              {label2}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      {isInternal ? (
                        <button
                          className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out text-primary-text-white hover:opacity-80"
                          onClick={(e) => handleInternalNavigation(href as string, e)}
                        >
                          {label}
                        </button>
                      ) : (
                        <Link
                          className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out text-primary-text-white hover:opacity-80"
                          href={href as string}
                          onClick={() => handleDropdownOnClick(index)}
                        >
                          {label}
                        </Link>
                      )}
                    </>
                  )}
                </li>
              ))}
          </ul>
        </nav>
        <div className="hidden md:flex md:w-auto md:self-center">
          <div className="flex w-full items-center justify-end md:w-auto">
            <button className="bg-secondary text-white font-medium py-2 px-8 rounded-md hover:bg-orange-500 transition-all duration-200 ease-in-out whitespace-nowrap shadow-orange-glow">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
