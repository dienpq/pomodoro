import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { RootState } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { changeLongBreak, changePomodoro, changeShortBreak } from '../redux/slices/timerSlice';
interface CustomTimerProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}
const CustomTimer: React.FC<CustomTimerProps> = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const timer = useSelector((state: RootState) => state.timer);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                                    <div>
                                        <label className="block text-sm font-medium leading-6 text-gray-900">
                                            Pomodoro
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                value={timer.pomodoro}
                                                min={0}
                                                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={(e) => dispatch(changePomodoro(e.target.value))}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium leading-6 text-gray-900">
                                            Short Break
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                value={timer.shortBreak}
                                                min={0}
                                                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={(e) => dispatch(changeShortBreak(e.target.value))}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium leading-6 text-gray-900">
                                            Long Break
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                value={timer.longBreak}
                                                min={0}
                                                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={(e) => dispatch(changeLongBreak(e.target.value))}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default CustomTimer;
