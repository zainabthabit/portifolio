import * as Tabs from '@radix-ui/react-tabs';
import * as HoverCard from '@radix-ui/react-hover-card';

function AboutMe() {
    return <section id='about' className="pt-[100px] pb-[100px] pl-[200px] flex flex-col gap-y-6 ">
        <div className="flex items-center ">
            <h1 className=" pr-[20px] font-serif text-3xl text-slate-800 dark:text-white">About Me</h1>
            <hr className='w-[400px] my-8 border-[1px]  border-slate-800 dark:text-slate-400 '></hr>

        </div>
        <div className='flex w-[900px]' >
            <div className='pr-[200px]'>
                <p className=" text-justify font-serif text-xl text-slate-800 dark:text-slate-400 w-[550px]">Hi, My name is Zainab and I enjoy creating things that live on the internet and serve everyone.
                    My interest in web development started back in 2023 when I decided to
                    design webpage for students who desire to complete their study.
                </p >
                <p className=" text-justify font-serif text-xl text-slate-800 dark:text-slate-400 w-[550px]">
                    I have built a good reputation and completed several programming projects, including designing and coding a website for a local business

                </p >

                <p className="pt-[30px] text-justify font-serif text-xl text-slate-800 text-xl dark:text-slate-400 w-[550px]">Education :</p>
                <Tabs.Root
                    className=" pt-[50px] flex flex-col w-[550px] bg-transparent	 "
                    defaultValue="tab1"
                >
                    <Tabs.List className="shrink-0 bg-transparent flex " >
                        <Tabs.Trigger
                            className="pb-[30px]  data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] hover:text-sky-400 px-5 h-[45px] flex-1 flex items-center justify-center text-slate-800 dark:text-slate-400 text-[20px] leading-none text-mauve11 select-none  cursor-pointer"
                            value="tab1"
                        >
                            Bachelor
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            className="pb-[30px]  data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] hover:text-sky-400 px-5 h-[45px] flex-1 flex items-center justify-center text-slate-800 dark:text-slate-400  text-[20px] leading-none text-mauve11 select-none cursor-pointer"
                            value="tab2"
                        >
                            Master
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content
                        className="grow p-5 text-slate-800  "
                        value="tab1"
                    >
                        <p className="mb-5 text-mauve11 dark:text-slate-400 text-[20px] text-center leading-normal">
                            B.Sc. in Computer Sciences
                        </p>
                        <p className="mb-5 text-mauve11 dark:text-slate-400 text-[15px] text-center leading-normal">

                            University Of Kufa, Iraq
                        </p>
                        <p className="mb-5 text-mauve11 dark:text-slate-400 text-[15px] text-center leading-normal">

                            ( 2008 - 2012 )
                        </p>

                    </Tabs.Content>
                    <Tabs.Content
                        className="grow p-5 text-slate-800 dark:text-slate-400  "
                        value="tab2"
                    >
                        <p className="mb-5  text-[20px] text-center leading-normal">
                            M.Sc. in Data Mining
                        </p>
                        <p className="mb-5 text-[15px] text-center leading-normal">

                            University Of Kufa, Iraq
                        </p>
                        <p className="mb-5 text-[15px] text-center leading-normal">

                            ( 2019 - 2021 )
                        </p>


                    </Tabs.Content>
                </Tabs.Root>
            </div>


            <HoverCard.Root>
                <HoverCard.Trigger asChild>

                    <img src='g.png' className='h-[300px] '></img>
                </HoverCard.Trigger>
                <HoverCard.Portal>
                    <HoverCard.Content
                        className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
                        sideOffset={ 5 }
                    >
                        <div className="flex flex-col gap-[7px]">

                            <div className="flex flex-col gap-[15px]">
                                <div>
                                    <div className="text-center text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">Zainab T. Madlool</div>
                                    <div className="text-center text-mauve10 m-0 text-[15px] leading-[1.5]">zainabthabit886@gmail</div>
                                </div>
                                <div className="text-center text-mauve12 m-0 text-[15px] leading-[1.5]">
                                    My passion is to create great software products which deliver an exceptional user experience. To fulfill this goal, I try to push my boundaries further every day.
                                </div>

                            </div>
                        </div>

                        <HoverCard.Arrow className="fill-white" />
                    </HoverCard.Content>
                </HoverCard.Portal>
            </HoverCard.Root>
        </div>

    </section >
}
export default AboutMe