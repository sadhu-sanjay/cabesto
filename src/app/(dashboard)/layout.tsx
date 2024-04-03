import { navData } from '~/data/nav-data'
import { Navbar } from '~/components/organisms/navbar'

export default function DashboardLayout({children}: {children: React.ReactNode}) {

        return (
          <div className="bg-white dark:bg-gray-900 box-border h-screen min-h-screen w-full grid grid-cols-12">
            <Navbar items={navData} className="col-span-2" />
            <div className="main flex flex-col col-span-10 overflow-hidden">
              {/* <Header
                title="Proposals"
                onSubmit={() => console.log("search")}
                onAvatarClick={() => setShowSignInModal(true)}
              /> */}
              <main className="rounded-4px flex flex-1 flex-col p-4 md:px-24 overflow-hidden shadow-sm border ">
                {/* <div className="rounded-4px subContainer border shadow-sm overflow-auto"> */}
                  {children}
                {/* </div> */}
              </main>
            </div>
          </div>
        );

}