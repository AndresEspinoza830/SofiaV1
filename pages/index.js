import Navbar from "../components/Layout/Navbar";
import Image from "next/image";
import img1 from "../public/food1.jpg";
import img2 from "../public/food2.jpg";
import img3 from "../public/food3.jpg";
import res from "../public/res2.jpg";
import Footer from "../components/Layout/Footer";

export default function Home({ carrito, eliminarProducto }) {
  return (
    <>
      <Navbar carrito={carrito} eliminarProducto={eliminarProducto} />
      <div className=" w-full bg-[url('/banner.jpg')] h-screen bg-cover bg-no-repeat flex justify-center items-center ">
        <div className="absolute text-[#F2F2F2] text-center flex flex-col justify-center items-center mx-auto ">
          <div className="flex items-end space-x-2">
            <div className="flex space-x-1">
              <div className="w-[8px] h-[8px] bg-[#D9BF73] rounded-full"></div>
              <div className="w-[8px] h-[8px] bg-[#D9BF73] rounded-full"></div>
              <div className="w-[8px] h-[8px] bg-[#D9BF73] rounded-full"></div>
            </div>
            <svg
              className="fill-[#D9BF73] text-center"
              width={30}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M475.428571 36.571429v365.714285q0 34.857143-20.285714 63.428572T402.285714 505.714286v445.142857q0 29.714286-21.714285 51.428571t-51.428572 21.714286H256q-29.714286 0-51.428571-21.714286t-21.714286-51.428571V505.714286q-32.571429-11.428571-52.857143-40T109.714286 402.285714V36.571429q0-14.857143 10.857143-25.714286t25.714285-10.857143 25.714286 10.857143 10.857143 25.714286v237.714285q0 14.857143 10.857143 25.714286t25.714285 10.857143 25.714286-10.857143 10.857143-25.714286V36.571429q0-14.857143 10.857143-25.714286t25.714286-10.857143 25.714285 10.857143 10.857143 25.714286v237.714285q0 14.857143 10.857143 25.714286t25.714286 10.857143 25.714285-10.857143 10.857143-25.714286V36.571429q0-14.857143 10.857143-25.714286t25.714286-10.857143 25.714286 10.857143 10.857142 25.714286z m438.857143 0v914.285714q0 29.714286-21.714285 51.428571t-51.428572 21.714286h-73.142857q-29.714286 0-51.428571-21.714286t-21.714286-51.428571v-292.571429H566.857143q-7.428571 0-12.857143-5.428571T548.571429 640V182.857143q0-75.428571 53.714285-129.142857t129.142857-53.714286h146.285715q14.857143 0 25.714285 10.857143t10.857143 25.714286z" />
            </svg>
            <div className="flex space-x-1">
              <div className="w-[8px] h-[8px] bg-[#D9BF73] rounded-full"></div>
              <div className="w-[8px] h-[8px] bg-[#D9BF73] rounded-full"></div>
              <div className="w-[8px] h-[8px] bg-[#D9BF73] rounded-full"></div>
            </div>
          </div>

          <h2 className="font-extrabold text-7xl mb-1 tracking-widest mt-0 font-abc">
            Experience the food
          </h2>
          <h1 className="font-philo text-xl mb-6">Mas de una decada contigo</h1>
          {/* <button className='bg-transparent px-5 py-3  text-[#F2F2F2]  border-[2px] border-[#D9BF73 hover:bg-transparent font-bold hover:border-[#D9BF73] rounded-sm duration-300 hover:text-[#D9BF73]'>VIEW OUR MENU</button> */}
        </div>
      </div>

      <div className="w-full md:flex max-w-[1360px] mx-auto px-10 py-12 items-center">
        <div className="text-center md:w-6/12">
          <h2 className="font-extrabold text-5xl mb-1 tracking-widest mt-0 font-abc text-[#052617]">
            Sofia's Restaurant
          </h2>
          <h3 className="font-extrabold text-2xl mb-1 tracking-widest mt-0 font-philo">
            restaurante
          </h3>
          <p className="md:px-7 mb-8 font-light text-lg">
            Welcome to Sofia's Restaurant! We provide our customers with
            authentic Hispanic cuisines like parilla, pescados y mariscos,
            sandwiches, and more! Come try our food today! We are located at on
            the corner of S Broad St. and Elizabeth Ave. not too far from Scott
            Park! Order Online today!
          </p>
          <a
            href="/menu"
            className="border-2 font-philo text-lg border-black bg-transparent hover:border-[#D9BF73] hover:text-[#D9BF73] rounded-sm py-2 px-6 duration-300"
          >
            Go to Menu
          </a>
        </div>
        <div className="overflow-hidden mx-auto md:w-6/12 mt-8 md:mt-0">
          <Image
            src={res}
            className="brightness-50 hover:scale-105 hover:brightness-75 w-full duration-[2s] ease-in-out"
            alt="image"
          />
        </div>
      </div>

      <div className="max-w-[1360px] w-full mx-auto bg-white rounded-sm py-12">
        <h2 className="font-extrabold text-5xl mb-1 text-center tracking-widest mt-0 font-abc text-[#052617]">
          Our Dishes
        </h2>
        <div className="flex flex-wrap justify-evenly space-y-16 mt-[-50px]">
          <Image
            src={img1}
            alt="imagen"
            className="brightness-[0.4] hover:brightness-[0.8] duration-[2s] mt-16"
          />
          <Image
            src={img2}
            alt="imagen"
            className="brightness-[0.4] hover:brightness-[0.8] duration-[2s] "
          />
          <Image
            src={img3}
            alt="imagen"
            className="brightness-[0.4] hover:brightness-[0.8] duration-[2s] "
          />
          <Image
            src={img1}
            alt="imagen"
            className="brightness-[0.4] hover:brightness-[0.8] duration-[2s] "
          />
          <Image
            src={img2}
            alt="imagen"
            className="brightness-[0.4] hover:brightness-[0.8] duration-[2s] "
          />
          <Image
            src={img3}
            alt="imagen"
            className="brightness-[0.4] hover:brightness-[0.8] duration-[2s] "
          />
        </div>
      </div>

      <div className="w-full mx-auto space-y-2 flex-col text-center md:text-start items-center md:flex md:flex-row space-x-8 justify-center bg-[#052617] py-20 mt-10">
        <svg
          width={250}
          viewBox="0 0 1150 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto md:mx-0"
        >
          <path
            d="M1150 711.36c0-94.1-48.26-177.08-121.27-225.69 15.06-6.58 28.87-15.95 40.68-28 24.34-24.82 37.38-57.68 36.71-92.54-1.16-59.92-51.31-108.66-111.8-108.66H795.04c-15.48 0-29.95 6.04-40.7 17.02-8.15 8.3-13.35 18.67-15.25 29.89h-62.44c-25.82 0-46.82 21-46.82 46.82v132.58h-78.08c-59.68-51.9-138.41-86.16-225.85-93.32l34.62-95.26c12.47-29.44 58.69-49.55 130.63-24.07 15.21 5.36 31.93-2.59 37.31-17.81 5.39-15.23-2.59-31.93-17.81-37.31-35.33-12.5-66.9-16.4-94.31-14.21l16.45-67.82c2.42-10.11-0.09-20.96-6.7-29.03-6.61-8.05-16.79-12.83-27.11-12.25-113.57 4.18-177.59 147.9-198.42 204.42-4.22-0.5-8.49-0.81-12.82-0.81-63.41 0-115 54.94-115 122.48s51.59 122.48 115 122.48c7.53 0 14.87-0.83 21.99-2.3l-14.59 40.13c-7.16-0.9-14.4-1.53-21.8-1.53-95.58 0-173.34 77.76-173.34 173.34s77.76 173.35 173.34 173.35c77.78 0 143.75-51.51 165.63-122.2h352.25c27.3 78.84 100.86 131.54 184.73 131.54 83.56 0 157.7-53.51 184.75-131.55h51.44c13.4 0 24.58-9.07 28.03-21.37 1.25-2.29 2.32-4.71 2.93-7.38 4.58-19.85 6.9-40.36 6.9-60.94z m-58.47 0c0 10.5-1.05 20.91-2.57 31.22H668.95c-1.52-10.31-2.55-20.72-2.55-31.22 0-117.21 95.36-212.56 212.56-212.56 117.21 0 212.57 95.36 212.57 212.56z m-749.08 0.88h264.21c0.17 3.77 0.65 7.47 0.65 11.28 0 3.57 0.73 6.95 1.9 10.11 0.24 2.98 0.18 5.99 0.52 8.96H346.32c-0.43-10.38-1.68-20.52-3.87-30.35z m651.86-397.29c28.86 0 52.8 23.03 53.35 51.32 0.36 19.02-6.74 36.94-19.99 50.47-13.6 13.87-32.02 21.5-51.88 21.5l-176.64 0.91-2.4-124.2h197.56zM641.47 541.26c25.82 0 46.83-21 46.83-46.82V361.85h50.88l1.52 78.42c0.23 11.92 4.22 22.94 10.77 32.06-50 26.78-90.45 68.88-115.56 119.87-8.5-17.87-18.86-34.83-30.54-50.95h36.1zM131.21 417.78c0-35.3 25.36-64.01 56.53-64.01s56.52 28.71 56.52 64.01-25.35 64.01-56.52 64.01-56.53-28.71-56.53-64.01z m123.36-99.47c17.19-48.2 56.85-130.7 111.59-158.65l-14.92 61.53c-21.22 13.16-36.57 31.38-45.12 51.61l-26.2 72.08c-7.12-10.19-15.65-19.16-25.35-26.57z m-81.23 546.47C110 864.78 58.47 813.25 58.47 749.9c0-63.34 51.53-114.87 114.87-114.87 0.37 0 0.72 0.05 1.08 0.05L128.31 761.93c-5.52 15.18 2.31 31.95 17.48 37.47 3.3 1.2 6.67 1.77 9.99 1.77 11.94 0 23.15-7.38 27.47-19.25l47.7-131.24c34.18 19.92 57.27 56.89 57.27 99.23 0 63.34-51.53 114.87-114.88 114.87z m77.78-269.58l53.88-148.23c140.64 5.2 257.52 91.36 291.79 206.8H334.96c-5.47 0-10.53 1.6-14.91 4.21-16.8-26.71-40.62-48.49-68.93-62.78z m624.83 278.93c-51.72 0-97.77-28.62-121.17-73.08H996.8c-23.41 44.01-69.45 73.08-120.85 73.08z"
            fill="#D9BF73"
          />
        </svg>
        <div className="text-[#D9BF73]">
          <h3 className="font-philo text-3xl">DELIVERY</h3>
          <h4 className="font-philo text-xl">Llamenos al</h4>
          <p className="font-philo text-xl">449 1395 / 348 7802</p>
        </div>
        <div className="text-[#D9BF73]">
          <h3 className="font-philo text-3xl">HOURS</h3>
          <h4 className="font-philo text-xl">Mon - Sun:</h4>
          <p className="font-philo text-xl"> 11:00 AM - 9:45 PM</p>
        </div>
      </div>

      <div className="px-10 xl:px-20 py-16">
        <h2 className="font-extrabold text-5xl mb-1 text-center tracking-widest mt-0 font-abc text-[#052617]">
          Find us
        </h2>
        <div className="md:flex py-4 text-center md:text-start">
          <div className="md:w-1/2 py-8 md:px-[50px] flex flex-col md:justify-start space-y-4">
            <div>
              <h2 className=" mb-8 font-abc text-2xl font-extrabold">
                Sofia's Restaurant
              </h2>
              <h2 className="font-abc  text-lg font-bold">Business Hours</h2>
              <p className="font-abc">Mon - Sun: 11:00 AM - 10:00 PM</p>
            </div>
            <div>
              <h2 className="font-abc text-lg font-bold">Carryout Hours</h2>
              <p className="font-abc">Mon - Sun: 11:00 AM - 9:45 PM</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <iframe
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.548181483172!2d-74.21703134860294!3d40.66188904851442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24d53aa36b011%3A0x60e9ca5a0d567538!2s2%20S%20Broad%20St%2C%20Elizabeth%2C%20NJ%2007201%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1668804421062!5m2!1ses-419!2spe"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
