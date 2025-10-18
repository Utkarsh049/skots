import Link from "next/link";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col justify-between lg:flex-row h-screen bg-gray-900 relative overflow-hidden">
      <section className="w-full lg:w-[45%] lg:h-screen px-6 lg:px-16 flex flex-col overflow-y-auto">
        {/* <Link href="/" className="pt-6 lg:pt-8 mb-8 lg:mb-12">
                <Image src=".assets/icons/logo.svg" alt="logo" width={140} height={40} className="h-8 w-auto"/>
            </Link> */}

        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>
      <section className="w-full max-lg:border-t max-lg:border-gray-600 lg:w-[55%] lg:h-screen bg-gray-800 px-6 py-4 md:p-6 lg:py-12 lg:px-18 flex flex-col justify-start">
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className="text-sm md:text-xl lg:text-2xl font-medium text-gray-400 mb-1 md:mb-6 lg:mb-8">
            "The best way to predict the future is to invent it."
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <cite className="text-xs md:text-lg font-bold text-gray-400 not-italic">
                - Master Yoda
              </cite>
              <p className="max-md:text:xs text-gray-500">Unknown god</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Layout;
