export default function Landing() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <div className="relative">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
                    Bienvenido a nuestro servicio de gestión de redes sociales
                </h1>
                <p className="text-lg md:text-2xl text-center mb-8 px-4">
                    Ayudamos a las empresas a hacer crecer su presencia en las redes sociales con publicaciones atractivas y efectivas.
                </p>
                <img src="/path/to/your/image.jpg" alt="illustration" className="w-64 h-64 object-cover mb-4 shadow-xl rounded-full absolute -right-8 -top-8 md:w-96 md:h-96"/>
            </div>
            <button className="text-lg font-semibold bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 mt-16">
                Comienza ahora
            </button>
        </div>
    );
}
