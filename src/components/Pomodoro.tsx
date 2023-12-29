import { useState } from "react";
import CountdownTimer from "./CountdownTimer";
function classNames(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}

const Pomodoro = () => {
    const [tabs, setTabs] = useState([
        { name: 'Pomodoro', seconds: 25 * 60, current: true },
        { name: 'Short Break', seconds: 5 * 60, current: false },
        { name: 'Long Break', seconds: 15 * 60, current: false },
    ]);

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
                        <div className="hidden sm:block">
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
                {(tabs.filter(tab => tab.current)).map(tab =>
                    <CountdownTimer seconds={tab.seconds} />
                )}
            </div>
        </main>
    )
}

export default Pomodoro;