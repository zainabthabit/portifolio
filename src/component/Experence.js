import * as Tabs from '@radix-ui/react-tabs';

function Work() {
    return <section id='work' className="pt-[30px] pb-[200px] pl-[450px] flex flex-col gap-y-6 ">
        <div className="flex items-center ">
            <h1 className=" pr-[20px] font-serif text-3xl text-slate-800 dark:text-white">Where I've worked</h1>
            <hr className='w-[400px] my-8 border-[1px]  text-slate-800 dark:text-slate-400 '></hr>

        </div>
        <p className="text-justify font-serif text-xl text-slate-800 dark:text-slate-400 w-[550px]">I've worked in several companies which are help me to polish my talent starting from 2012 until nowadays some of them are:
        </p >

        <Tabs.Root
            className=" pt-[50px] flex flex-col w-[550px] bg-transparent	 "
            defaultValue="tab1"
        >
            <Tabs.List className="shrink-0 bg-transparent flex " >
                <Tabs.Trigger
                    className="pb-[30px] dark:text-slate-400  data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]  hover:text-sky-400 px-5 h-[45px] flex-1 flex items-center justify-center text-slate-800 text-[20px] leading-none text-mauve11 select-none  cursor-pointer"
                    value="tab1"
                >
                    AlkafeelOmnnea
                </Tabs.Trigger>
                <Tabs.Trigger
                    className="pb-[30px] dark:text-slate-400 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]  hover:text-sky-400 px-5 h-[45px] flex-1 flex items-center justify-center text-slate-800 text-[20px] leading-none text-mauve11 select-none cursor-pointer"
                    value="tab2"
                >
                    Directory Of Education
                </Tabs.Trigger>
                <Tabs.Trigger
                    className="pb-[30px] dark:text-slate-400 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]    hover:text-sky-400 px-5 h-[45px] flex-1 flex items-center justify-center text-slate-800 text-[20px] leading-none text-mauve11 select-none cursor-pointer"
                    value="tab3"
                >
                    UNICEF
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
                className="grow p-5 text-slate-800 dark:text-slate-400 "
                value="tab1"
            >
                <p className="mb-5  text-[20px] text-center leading-normal">
                    AlkafeelOmnnea Telecomunication company
                </p>
                <p className="mb-5  text-[20px] text-center leading-normal">
                    " IT Specialest"
                </p>
                <p className="mb-5  text-[15px] text-center leading-normal">

                    I was responsible for the servers of the company and managing the website of it.
                </p>
                <p className="mb-5  text-[15px] text-center leading-normal">

                    ( 2012-2013 )
                </p>

            </Tabs.Content>
            <Tabs.Content
                className="grow p-5 text-slate-800 dark:text-slate-400  "
                value="tab2"
            >
                <p className="mb-5  text-[20px] text-center leading-normal">
                    General Directorate of Education in Najaf Governorate
                </p>
                <p className="mb-5  text-[20px] text-center leading-normal">
                    "Human Resources Manager"
                </p>
                <p className="mb-5  text-[15px] text-center leading-normal">

                    I was responsible for the servers that hold all the information of the employees and Human Resources manager
                </p>
                <p className="mb-5  text-[15px] text-center leading-normal">

                    ( 2013-2021 )
                </p>


            </Tabs.Content>
            <Tabs.Content
                className="grow p-5 text-slate-800 dark:text-slate-400  "
                value="tab3"
            >
                <p className="mb-5  text-[20px] text-center leading-normal">
                    UNICEF
                </p>
                <p className="mb-5  text-[20px] text-center leading-normal">
                    "Trainer"
                </p>
                <p className="mb-5  text-[15px] text-center leading-normal">

                    I was responsible for training the teachers on managing an educational managment information system.
                </p>
                <p className="mb-5  text-[15px] text-center leading-normal">

                    ( 2021-... )
                </p>


            </Tabs.Content>
        </Tabs.Root>

    </section>
}
export default Work