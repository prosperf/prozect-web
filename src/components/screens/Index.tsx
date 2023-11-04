import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';

function Index() {
  const { state } = useAuthState();
  const [isOpen, setIsOpen] = useState(true);
  const completeButtonRef = useRef(null);

  return (
    <>
      <Head title="Home" />
      <div className="hero min-h-screen">
        <div className="text-center hero-content">
          <div className="w-max ">
            <h1 className="animate-typing h-16 overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-neutral-300 font-bold">
              <text className="text-red-600">
                Pro<sup>z</sup>ect
              </text>
              {(() => ' | Projects by Prosperf...')()}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
