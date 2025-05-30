// This will contain the card component for the coreClasses I have taken
// If favorite is true, add a star to the top right corner
export function CoreClasses({
    courseNum,
    courseDescription,
    Link,
    favorite,
}: {
    courseNum: string;
    courseDescription: string;
    Link: string;
    favorite?: boolean;
}) {
    return (
        <div className="relative bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700">

            {favorite && (
                <div className="absolute top-2 right-2 text-yellow-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.073 3.3a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.073 3.3c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.073-3.3a1 1 0 00-.364-1.118L2.43 8.727c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.073-3.3z" />
                    </svg>
                </div>
            )}

            <h3 className="text-lg text-white mb-2 italic">{courseNum}</h3>
            <p className="text-gray-400 mb-4">{courseDescription}</p>
            <a
                href={Link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-400 hover:text-green-500 transition-colors duration-300 text-sm font-medium cursor-pointer"
            >
                <span>View Course</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    );
}
