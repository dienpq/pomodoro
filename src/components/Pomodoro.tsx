import { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { useSelector } from "react-redux";
import { RootState } from "../types";

function classNames(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}

const Pomodoro = () => {
    const timer = useSelector((state: RootState) => state.timer);

    const [tabs, setTabs] = useState([
        { name: 'Pomodoro', seconds: timer.pomodoro, current: true },
        { name: 'Short Break', seconds: timer.shortBreak, current: false },
        { name: 'Long Break', seconds: timer.longBreak, current: false },
    ]);

    useEffect(() => {
        setTabs(tabPrev => tabPrev.map(tab => {
            let seconds;
            switch(tab.name) {
                case 'Pomodoro':
                    seconds = timer.pomodoro;
                    break;
                case 'Short Break':
                    seconds = timer.shortBreak;
                    break;
                case 'Long Break':
                    seconds = timer.longBreak;
                    break;
                default:
                    seconds = tab.seconds;
            }
            return { ...tab, seconds: seconds };
        }));
    }, [timer]);

    const changeTab = (tabName: string) => {
        setTabs(tabs.map(tab => ({
            ...tab,
            current: tab.name === tabName,
        })));
    };

    return (
        <main className="grid place-items-center h-screen">
            <div className="text-center">
                <div>
                    <div>
                        <div className="sm:hidden">
                            <label htmlFor="tabs" className="sr-only">
                                Select a tab
                            </label>
                            <select
                                id="tabs"
                                name="tabs"
                                className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                            >
                                {tabs.map((tab) => (
                                    <option key={tab.name}>{tab.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="hidden sm:block  p-2 rounded-md">
                            <nav className="flex space-x-4" aria-label="Tabs">
                                {tabs.map((tab) => (
                                    <div
                                        key={tab.name}
                                        className={classNames(
                                            tab.current ? 'bg-gray-100 text-gray-700' : 'text-gray-500 hover:text-gray-700',
                                            'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                                        )}
                                        aria-current={tab.current ? 'page' : undefined}
                                        onClick={() => changeTab(tab.name)}
                                    >
                                        {tab.name}
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="rounded-full py-14 mt-10 shadow border-2 shadow-orange-500 bg-white">
                {(tabs.filter(tab => tab.current)).map(tab =>
                    <CountdownTimer seconds={tab.seconds} />
                )}
                </div>
            </div>
        </main>
    )
}

export default Pomodoro;