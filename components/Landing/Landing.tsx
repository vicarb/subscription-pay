export default function Landing() {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <div className="z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
                    Bienvenido a nuestro servicio de gestión de redes sociales
                </h1>
                <p className="text-lg md:text-2xl text-center mb-8 px-4">
                    Ayudamos a las empresas a hacer crecer su presencia en las redes sociales con publicaciones atractivas y efectivas.
                </p>
                <button className="text-lg font-semibold bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 mt-16">
                    Comienza ahora
                </button>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50 z-0" style={{backgroundImage: `url('https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80g')`}}/>
        </div>
    );
}
