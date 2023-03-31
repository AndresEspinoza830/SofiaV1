import React from "react";

const Footer = () => {
  return (
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div class="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0 "
          >
            <span class="block text-sm text-gray-500 dark:text-gray-400">
              <a
                href="https://flowbite.com/"
                className="hover:underline text-center"
              >
                Sophia's Restaurant
              </a>
              . All Rights Reserved.
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Accesibilidad
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Terminos
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Ayuda
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
