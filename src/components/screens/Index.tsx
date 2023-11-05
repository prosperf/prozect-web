import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';
import image from '../../prozect-title-extended-red-text.png';

function Index() {
  const { state } = useAuthState();
  const [isOpen, setIsOpen] = useState(true);
  const completeButtonRef = useRef(null);

  return (
    <>
      <Head title="Home" />
      <div className="hero m-0 min-h-screen overflow-hidden">
        <div className="text-center p-0 hero-content">
          <div className="w-max">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-neutral-800 text-5xl text-neutral-300 font-bold">
              <div className="w-screen aspect-auto sm:w-auto sm:h-28 sm:aspect-[11/2]">
                <img src={image} className="max-h-full object-fit sm:object-cover" />
              </div>
            </h1>
            <div className="m-auto ">
              <hr className="animate-mid_reveal animation-delay-1000 m-auto w-0 text-neutral-300" />
            </div>
            <div className="overflow-hidden">
              <h2 className="-translate-y-full animate-top_reveal  animation-delay-[2000ms] sm:h-28 m-auto text-lg sm:text-2xl text-neutral-300">
                transcience cut short
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
