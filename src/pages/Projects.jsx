export default function Projects() {

    return (
        <>
            <div className="flex flex-row gap-2">
                <div className="flex flex-col bg-card gap-2 rounded-xl w-1/2 card-animation relative">
                    <div className="mt-5 h-44 flex justify-center">
                        <img src="https://assets.kwickmetrics.com/2024/08/Sales-Analytics-1536x776.png" alt="bot" className="w-80 left-5 absolute rounded"/>
                    </div>
                    <div className="px-5 pb-5 flex flex-col gap-3">
                        <h2 className="text-start text-2xl font-semibold leading-tight lg:text-3xl">KwickMetrics</h2>
                        <div className="leading-loose">
                            I have an experience as a backend developer in KwickMetrics is an E-commerce application which aims to provide
                            business analytics online sellers to manage there Sales, Advertisements and Reimbursements. 
                            I have built api's which provides data according different modules of management, performed data seeding, 
                            interacting with third party applications to integrate marketplaces and manage users selling data. 
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-start gap-2">
                                <div className="px-3 py-1.5 bg-card-400 rounded-xl text-grey-600 text-sm font-semibold leading-3">Laravel</div>
                                <div className="px-3 py-1.5 bg-card-400 rounded-xl text-grey-600 text-sm font-semibold leading-3">Postgres</div>
                            </div>
                            <div className="px-3 py-1.5 bg-card-400 rounded-xl text-grey-600 text-sm font-semibold leading-3">Jun 2023 - Current</div>
                        </div>
                    </div>
                </div> 
            </div>
        </>   
    )
}