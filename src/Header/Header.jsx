import { TabSwitcher } from "../TabSwitcher/TabSwitcher"
import { useLocation } from "react-router-dom"

export const Header = () => {
  const location = useLocation();
  const showPage = ['/character-stats', '/missions', '/achievements', '/gallery'];
  const isPage = showPage.includes(location.pathname);



  return (
    <header className='w-full bg-black text-center py-4 '>
      {!isPage && <h1 className="text-white text-xl tracking-widest opacity-0">HIDDEN</h1>}
      {isPage && (
        <div className="w-full flex justify-center">
          <TabSwitcher />
        </div>
      )}
    </header>
  )
}