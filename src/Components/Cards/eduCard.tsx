export function EduCard() {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-700 flex flex-col gap-3">
            <h3 className="text-xl text-white">
                University of Washington
            </h3>
            <p className="text-gray-300 text-base text-left">
                B.S. Computer Science
            </p>
            <p className="text-gray-300 text-base text-left">
                Seattle, WA (2022 - Present)
            </p>

            <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="resume.pdf"
                className="inline-flex items-center text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm font-medium"
            >
                <span>Resume</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4H9l3-3 3 3h-2v4zM5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
            </a>

            <a
                href="https://www.cs.washington.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm font-medium"
            >
                <span>Visit University</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </a>
        </div>
    );
}
