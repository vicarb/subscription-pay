export default function Services() {
    const services = [
        {
            id: 1,
            title: "Basic Plan",
            image: "/path/to/image1.jpg",
            description: "Get 3 engaging social media posts per month.",
            postCount: 3
        },
        {
            id: 2,
            title: "Standard Plan",
            image: "/path/to/image2.jpg",
            description: "Enjoy 6 creative social media posts per month.",
            postCount: 6
        },
        {
            id: 3,
            title: "Premium Plan",
            image: "/path/to/image3.jpg",
            description: "Receive 9 premium social media posts per month.",
            postCount: 9
        }
    ]

    return (
        <div className="flex flex-wrap justify-around px-4">
            {services.map(service => (
                <div key={service.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-2xl">
                        <img src={service.image} alt={service.title} className="w-24 h-24 rounded-full"/>
                        <h2 className="mt-4 text-2xl font-bold text-blue-700">{service.title}</h2>
                        <p className="mt-2 text-lg text-gray-700">{service.description}</p>
                        <p className="mt-2 text-xl font-semibold text-gray-800">Posts: {service.postCount}</p>
                        <button className="mt-4 px-4 py-2 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded">
                            Subscribe
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
