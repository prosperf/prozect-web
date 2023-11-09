import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';
import image from '../../prozect-title-extended-red-text.png';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

function Index() {
  const { state } = useAuthState();
  const [hookedYPosition, setHookedYPosition] = useState(0);
  const { scrollYProgress } = useScroll();
  const completeButtonRef = useRef(null);
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setHookedYPosition(latest);
  });

  return (
    <>
      <Head title="Home" />
      <div>
        <div className="hero m-0 min-h-screen bg-neutral-900 relative overflow-hidden">
          <div className="text-center p-0 hero-content my-10">
            <motion.div
              className="w-max fixed left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ top: `${(0.3 - hookedYPosition * 0.3) * 100 + 20}%` }}
            >
              <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-neutral-900 text-5xl text-neutral-300 font-bold">
                <div className="w-screen aspect-auto sm:w-auto sm:h-28 sm:aspect-[11/2]">
                  <img src={image} className="max-h-full object-fit sm:object-cover" />
                </div>
              </h1>
              <div className="m-auto ">
                <hr className="animate-mid_reveal animation-delay-1000 m-auto w-0 text-neutral-300" />
              </div>
              <div className="overflow-hidden">
                <h2 className="-translate-y-full animate-top_reveal  animation-delay-[2000ms] sm:h-28 m-auto text-lg sm:text-2xl text-neutral-300">
                  defying transcience
                </h2>
              </div>
            </motion.div>
            <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2">
              <ChevronDownIcon
                className="h-10 w-10 text-red-500 animate-pulse hover:cursor-pointer"
                onClick={() => {
                  window.scroll({
                    top: document.body.offsetHeight,
                    left: 0,
                    behavior: 'smooth',
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="min-h-[60vh]">toes</div>
      </div>
    </>
  );
}

export default Index;
