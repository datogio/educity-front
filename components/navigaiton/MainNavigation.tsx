import { MouseEventHandler, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { NavigationItem, Button, Times, Overlay, Auth } from '../../components';
import * as userActions from '../../store/user';

interface MainNavigationProps {
  isActive: boolean;
  toggleNavActivation: MouseEventHandler<HTMLOrSVGElement>;
}

const MainNavigation = (props: MainNavigationProps) => {
  const router = useRouter();
  const user = useSelector(userActions.selectUser);
  const [isAuthActive, setIsAuthActive] = useState<boolean>(false);

  const toggleAuthActivation: MouseEventHandler<HTMLButtonElement> = () => {
    setIsAuthActive((prev) => !prev);
  };

  const onDashboardButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    router.push('/dashboard');
  };

  return (
    <ul
      className={`${
        props.isActive
          ? 'fixed top-0 bottom-0 left-0 right-0 z-40 bg-green-600 text-center text-white text-lg space-y-10 md:space-y-0'
          : 'hidden'
      } md:bg-transparent md:static md:flex md:space-x-5 md:text-lg md:font-bold md:text-gray-700`}
    >
      <div className="flex justify-end pt-3 mb-20 pr-3 md:hidden">
        <Times onClick={props.toggleNavActivation} />
      </div>
      <NavigationItem link="/" name="მთავარი" />
      <NavigationItem link="/library" name="ბიბლიოთეკა" />
      <NavigationItem link="/cources" name="კურსები" />
      <NavigationItem link="/projects" name="პროექტები" />
      <NavigationItem link="/social" name="სოც.ქსელი" />
      <div className="hidden md:block">
        {!user ? (
          <Button
            color="green"
            size="md"
            value="Sign In / Up"
            onClick={toggleAuthActivation}
          />
        ) : (
          <Button
            color="green"
            size="md"
            value="მართვა"
            onClick={onDashboardButtonClick}
          />
        )}
      </div>
      <div className="md:hidden">
        {!user ? (
          <Button
            color="white"
            size="md"
            value="Sign In / Up"
            onClick={toggleAuthActivation}
          />
        ) : (
          <Button
            color="white"
            size="md"
            value="მართვა"
            onClick={onDashboardButtonClick}
          />
        )}
      </div>
      {isAuthActive && (
        <Overlay onCloseClick={toggleAuthActivation}>
          <Auth />
        </Overlay>
      )}
    </ul>
  );
};

export default MainNavigation;
