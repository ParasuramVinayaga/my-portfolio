export default function Projects() {

    return (
        <div className="flex flex-col bg-card gap-2 rounded-xl overflow-hidden w-5/12 card-animation relative h-96">
            <div className="p-5 flex flex-col gap-2">
                <h2 className="text-start text-2xl font-semibold leading-tight lg:text-3xl">KwickMetrics</h2>
                <div className="leading-loose">
                    KwickMetrics is an E-commerce application which aims to provide
                    business analytics online sellers to manage there Sales, Advertisement and Reimbursement.
                    
                </div>
            </div>
            <div className="flex justify-center">
                <img src="https://assets.kwickmetrics.com/2024/08/Sales-Analytics-1536x776.png" alt="bot" className="w-80 absolute"/>
            </div>
        </div>
    )
}