/* eslint-disable react/prop-types */
export const RevenueCard = ({
    title,
    showWarning,
    orderCount,
    amount
}) => {
    return (
        <div className="bg-white rounded shadow-md p-4">
            <div className="flex p-2">
                <div>{title}</div>
                <div className="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-between p-2">
                <div className="font-semibold text-2xl">
                    ₹ {amount}
                </div>
                <div>
                {orderCount ? <div className="flex text-blue-700 cursor-pointer underline font-medium flex flex-col justify-between">
                    <div className="flex">
                        <div>{orderCount} order(s)</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div> : null}
                </div>
            </div>
        </div>
    )
}